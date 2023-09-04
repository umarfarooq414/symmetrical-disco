"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationService = void 0;
const team_1 = require("../../../libs/types/src/db/entities/team");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const team_entity_1 = require("./entities/team-entity");
const teamMembers_1 = require("./entities/teamMembers");
const cloudinary_config_1 = require("../../config/cloudinary.config");
const common_2 = require("../../../libs/dtos/src/common");
const sports_entity_1 = require("../sports/entities/sports.entity");
const mail_service_1 = require("../mail/mail.service");
const types_1 = require("../../../libs/types/src");
const config_1 = require("@nestjs/config");
let RegistrationService = class RegistrationService {
    constructor(registrationRepository, teamMemberRepository, sportsRepo, cloudinary, mailService, configService) {
        this.registrationRepository = registrationRepository;
        this.teamMemberRepository = teamMemberRepository;
        this.sportsRepo = sportsRepo;
        this.cloudinary = cloudinary;
        this.mailService = mailService;
        this.configService = configService;
    }
    async getTeamStatus(id) {
        try {
            const registration = await this.registrationRepository.findOneBy({
                id,
            });
            if (registration) {
                return registration.status;
            }
            else {
                throw new common_1.HttpException('Team not found', common_1.HttpStatus.NOT_FOUND);
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async EnterTeam(createTeamDto, paymentImage) {
        var _a;
        try {
            const { teamName, captainName, phoneNumber, members, sports, email } = createTeamDto;
            const players = members.split(',');
            const existingSport = await this.sportsRepo.findOne({
                where: {
                    sportsName: sports,
                },
                relations: ['teams'],
            });
            if (!existingSport)
                throw new common_1.HttpException('Sport not Found!.', common_1.HttpStatus.NOT_FOUND);
            const existingTeam = (_a = existingSport.teams) === null || _a === void 0 ? void 0 : _a.find((team) => team.teamName === teamName);
            if (existingTeam)
                throw new common_1.HttpException('Team Already Registered!.', common_1.HttpStatus.CONFLICT);
            if (players.length < existingSport.minParticipants ||
                players.length > existingSport.maxParticipants)
                throw new common_1.HttpException('Must meet team members limit requirement!.', common_1.HttpStatus.CONFLICT);
            const registration = new team_entity_1.Teams();
            registration.teamName = teamName;
            registration.captainName = captainName;
            registration.phoneNumber = phoneNumber;
            registration.status = team_1.TeamRegistrationStatus.PENDING;
            registration.sport = existingSport;
            registration.email = email;
            if (paymentImage) {
                try {
                    const res = await this.cloudinary.uploadImage(paymentImage, 'payments');
                    registration.image = res === null || res === void 0 ? void 0 : res.url;
                }
                catch (error) {
                    throw new common_1.HttpException('Invalid file type.', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            const savedRegistration = await this.registrationRepository.save(registration);
            const teamMemberPromises = players === null || players === void 0 ? void 0 : players.map((memberDto) => {
                const teamMember = new teamMembers_1.TeamMember();
                teamMember.name = memberDto;
                teamMember.team = savedRegistration;
                return this.teamMemberRepository.save(teamMember);
            });
            const res = await Promise.all(teamMemberPromises);
            if (res && savedRegistration)
                return new common_2.GlobalResponseDto('Team Registration Request Submitted, wait for confirmation Email!');
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async updateStatus({ id, status }) {
        try {
            let message = '';
            const foundTeam = await this.registrationRepository.findOne({
                where: {
                    id,
                },
                relations: ['sport'],
            });
            if (!foundTeam)
                throw new common_1.HttpException('Team Not Found!', common_1.HttpStatus.NOT_FOUND);
            if (status === team_1.TeamRegistrationStatus.APPROVED) {
                foundTeam.status = status;
                await this.registrationRepository.save(foundTeam);
                message = 'Team Approved Successfully!';
                const { productName, frontendUrl } = this.configService.get(types_1.ConfigEnum.SERVER);
                this.mailService.sendVerificationMail(foundTeam.email, {
                    authLoginLink: frontendUrl,
                    firstName: foundTeam.captainName,
                    productName,
                });
            }
            if (status === team_1.TeamRegistrationStatus.REJECTED) {
                foundTeam.status = status;
                await this.registrationRepository.save(foundTeam);
                message = 'Team Rejected Successfully!';
            }
            return new common_2.GlobalResponseDto(message);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async getTeams() {
        try {
            const res = await this.registrationRepository.find({
                relations: ['members'],
            });
            if (!res)
                throw new common_1.HttpException('could not fetch teams', common_1.HttpStatus.BAD_REQUEST);
            return res;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
RegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(team_entity_1.Teams)),
    __param(1, (0, typeorm_1.InjectRepository)(teamMembers_1.TeamMember)),
    __param(2, (0, typeorm_1.InjectRepository)(sports_entity_1.Sports)),
    __param(3, (0, common_1.Inject)(cloudinary_config_1.CloudinaryConfigService)),
    __param(4, (0, common_1.Inject)(mail_service_1.MailService)),
    __param(5, (0, common_1.Inject)(config_1.ConfigService)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        cloudinary_config_1.CloudinaryConfigService,
        mail_service_1.MailService,
        config_1.ConfigService])
], RegistrationService);
exports.RegistrationService = RegistrationService;
//# sourceMappingURL=registration.service.js.map