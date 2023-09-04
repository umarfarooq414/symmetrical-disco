/// <reference types="multer" />
import { TeamRegistrationStatus } from '@lib/types/db/entities/team';
import { Repository } from 'typeorm';
import { Teams } from './entities/team-entity';
import { TeamMember } from './entities/teamMembers';
import { CreateTeamDto } from '@lib/dtos/team/create-team-dto';
import { CloudinaryConfigService } from '@config/cloudinary.config';
import { GlobalResponseDto } from '@lib/dtos/common';
import { Sports } from '../sports/entities/sports.entity';
import { UpdateRegistrationStatusDto } from '@lib/dtos';
import { MailService } from '../mail/mail.service';
import { ConfigService } from '@nestjs/config';
export declare class RegistrationService {
    private readonly registrationRepository;
    private teamMemberRepository;
    private sportsRepo;
    private readonly cloudinary;
    private readonly mailService;
    private readonly configService;
    constructor(registrationRepository: Repository<Teams>, teamMemberRepository: Repository<TeamMember>, sportsRepo: Repository<Sports>, cloudinary: CloudinaryConfigService, mailService: MailService, configService: ConfigService);
    getTeamStatus(id: string): Promise<TeamRegistrationStatus>;
    EnterTeam(createTeamDto: CreateTeamDto, paymentImage: Express.Multer.File): Promise<GlobalResponseDto>;
    updateStatus({ id, status }: UpdateRegistrationStatusDto): Promise<GlobalResponseDto>;
    getTeams(): Promise<Teams[]>;
}
