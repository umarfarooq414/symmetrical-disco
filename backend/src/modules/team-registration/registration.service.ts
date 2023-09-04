import { TeamRegistrationStatus } from '@lib/types/db/entities/team';
import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teams } from './entities/team-entity';
import { TeamMember } from './entities/teamMembers';
import { CreateTeamDto } from '@lib/dtos/team/create-team-dto';
import { CloudinaryConfigService } from '@config/cloudinary.config';
import { GlobalResponseDto } from '@lib/dtos/common';
import { Sports } from '../sports/entities/sports.entity';
import { UpdateRegistrationStatusDto } from '@lib/dtos';
import { MailService } from '../mail/mail.service';
import { ConfigEnum, IServerConfig } from '@lib/types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Teams)
    private readonly registrationRepository: Repository<Teams>,
    @InjectRepository(TeamMember)
    private teamMemberRepository: Repository<TeamMember>,
    @InjectRepository(Sports)
    private sportsRepo: Repository<Sports>,
    @Inject(CloudinaryConfigService)
    private readonly cloudinary: CloudinaryConfigService,
    @Inject(MailService)
    private readonly mailService: MailService,
    @Inject(ConfigService)
    private readonly configService: ConfigService
  ) {}

  async getTeamStatus(id: string): Promise<TeamRegistrationStatus> {
    try {
      const registration = await this.registrationRepository.findOneBy({
        id,
      });
      if (registration) {
        return registration.status;
      } else {
        throw new HttpException('Team not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async EnterTeam(
    createTeamDto: CreateTeamDto,
    paymentImage: Express.Multer.File
  ): Promise<GlobalResponseDto> {
    try {
      const { teamName, captainName, phoneNumber, members, sports, email } =
        createTeamDto;
      const players = members.split(',');
      const existingSport = await this.sportsRepo.findOne({
        where: {
          sportsName: sports,
        },
        relations: ['teams'],
      });
      if (!existingSport)
        throw new HttpException('Sport not Found!.', HttpStatus.NOT_FOUND);
      const existingTeam = existingSport.teams?.find(
        (team) => team.teamName === teamName
      );
      if (existingTeam)
        throw new HttpException(
          'Team Already Registered!.',
          HttpStatus.CONFLICT
        );
      if (
        players.length < existingSport.minParticipants ||
        players.length > existingSport.maxParticipants
      )
        throw new HttpException(
          'Must meet team members limit requirement!.',
          HttpStatus.CONFLICT
        );
      const registration = new Teams();
      registration.teamName = teamName;
      registration.captainName = captainName;
      registration.phoneNumber = phoneNumber;
      registration.status = TeamRegistrationStatus.PENDING;
      registration.sport = existingSport;
      registration.email = email;
      if (paymentImage) {
        try {
          const res: any = await this.cloudinary.uploadImage(
            paymentImage,
            'payments'
          );
          registration.image = res?.url;
        } catch (error) {
          throw new HttpException('Invalid file type.', HttpStatus.BAD_REQUEST);
        }
      }
      const savedRegistration = await this.registrationRepository.save(
        registration
      );
      const teamMemberPromises = players?.map((memberDto) => {
        const teamMember = new TeamMember();
        teamMember.name = memberDto;
        // teamMember.rollNumber = memberDto;
        teamMember.team = savedRegistration;
        return this.teamMemberRepository.save(teamMember);
      });
      const res = await Promise.all(teamMemberPromises);
      if (res && savedRegistration)
        return new GlobalResponseDto(
          'Team Registration Request Submitted, wait for confirmation Email!'
        );
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async updateStatus({ id, status }: UpdateRegistrationStatusDto) {
    try {
      let message = '';
      const foundTeam = await this.registrationRepository.findOne({
        where: {
          id,
        },
        relations: ['sport'],
      });
      if (!foundTeam)
        throw new HttpException('Team Not Found!', HttpStatus.NOT_FOUND);
      if (status === TeamRegistrationStatus.APPROVED) {
        foundTeam.status = status;
        await this.registrationRepository.save(foundTeam);
        message = 'Team Approved Successfully!';
        const { productName, frontendUrl } =
          this.configService.get<IServerConfig>(ConfigEnum.SERVER);
        this.mailService.sendVerificationMail(foundTeam.email, {
          authLoginLink: frontendUrl,
          firstName: foundTeam.captainName,
          productName,
        });
      }
      if (status === TeamRegistrationStatus.REJECTED) {
        foundTeam.status = status;
        await this.registrationRepository.save(foundTeam);

        message = 'Team Rejected Successfully!';
      }
      return new GlobalResponseDto(message);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async getTeams(): Promise<Teams[]> {
    try {
      const res = await this.registrationRepository.find({
        relations: ['members'],
      });
      if (!res)
        throw new HttpException(
          'could not fetch teams',
          HttpStatus.BAD_REQUEST
        );
      return res;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
