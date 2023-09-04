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
exports.HiringService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../user/entities/user.entity");
const typeorm_2 = require("typeorm");
const hiring_entity_1 = require("./entities/hiring.entity");
const common_2 = require("../../../libs/dtos/src/common");
const cloudinary_config_1 = require("../../config/cloudinary.config");
const types_1 = require("../../../libs/types/src");
const hiringTable_entity_1 = require("./entities/hiringTable.entity");
const mail_service_1 = require("../mail/mail.service");
const config_1 = require("@nestjs/config");
let HiringService = class HiringService {
    constructor(userRepository, hiringRepository, hiringTableRepository, cloudinaryConfigService, mailService, configService) {
        this.userRepository = userRepository;
        this.hiringRepository = hiringRepository;
        this.hiringTableRepository = hiringTableRepository;
        this.cloudinaryConfigService = cloudinaryConfigService;
        this.mailService = mailService;
        this.configService = configService;
    }
    async register(body, file) {
        try {
            const { email, userName, phoneNumber, rollNumber, position } = body;
            const existingUser = await this.userRepository.findOneBy({ email });
            if (!existingUser)
                throw new common_1.HttpException('User must be existing User', common_1.HttpStatus.NOT_FOUND);
            const existingHiring = await this.hiringRepository.findOneBy({
                email,
                position,
            });
            console.log(body);
            if (existingHiring)
                throw new common_1.HttpException('User cannot apply for same position more than once!', common_1.HttpStatus.CONFLICT);
            const hire = new hiring_entity_1.Hiring();
            hire.userName = userName;
            hire.phoneNumber = phoneNumber;
            hire.rollNumber = rollNumber;
            hire.position = position;
            hire.user = existingUser;
            hire.email = email;
            if (file) {
                const result = await this.cloudinaryConfigService.uploadImage(file, 'hiring');
                const url = result === null || result === void 0 ? void 0 : result.url;
                hire.photos = url;
                await this.hiringRepository.save(hire);
            }
            return new common_2.GlobalResponseDto('Hiring Request Saved!');
        }
        catch (error) {
            console.log(error.message, error.status);
            throw new common_1.HttpException(error === null || error === void 0 ? void 0 : error.message, error === null || error === void 0 ? void 0 : error.status);
        }
    }
    async changeStatus({ userId, status, }) {
        try {
            const existingHiring = await this.hiringRepository.findOne({
                where: {
                    id: userId,
                },
                relations: ['user'],
            });
            const existingUser = await this.userRepository.findOne({
                where: {
                    id: existingHiring.user.id,
                },
            });
            let message = '';
            if (!existingHiring)
                throw new common_1.HttpException('Existing User not found!', common_1.HttpStatus.NOT_FOUND);
            if (status === types_1.HiringStatus.APPROVED) {
                existingHiring.status = types_1.HiringStatus.APPROVED;
                if (existingHiring.position.includes('Coordinator')) {
                    console.log(existingHiring.user.role);
                    existingUser.role = types_1.UserRoleEnum.COORDINATOR;
                    await this.userRepository.save(existingUser);
                }
                message = 'Hiring Approved!';
                const { productName, frontendUrl } = this.configService.get(types_1.ConfigEnum.SERVER);
                this.mailService.sendVerificationMail(existingHiring.email, {
                    authLoginLink: frontendUrl,
                    firstName: existingHiring.userName,
                    productName,
                });
                await this.hiringRepository.save(existingHiring);
            }
            if (status === types_1.HiringStatus.REJECTED) {
                existingHiring.status = types_1.HiringStatus.REJECTED;
                message = 'Hiring Rejected!';
                await this.hiringRepository.save(existingHiring);
            }
            return new common_2.GlobalResponseDto(message);
        }
        catch (error) {
            throw new common_1.HttpException(error === null || error === void 0 ? void 0 : error.message, error === null || error === void 0 ? void 0 : error.status);
        }
    }
    async showHideHiring({ setting, }) {
        try {
            let message = '';
            if (setting) {
                await this.hiringTableRepository.update({ enable: false }, { enable: setting });
                message = 'Hiring Enabled!';
            }
            if (setting === false) {
                await this.hiringTableRepository.update({ enable: true }, { enable: setting });
                message = 'Hiring Disabled!';
            }
            return new common_2.GlobalResponseDto(message);
        }
        catch (error) {
            throw new common_1.HttpException(error === null || error === void 0 ? void 0 : error.message, error === null || error === void 0 ? void 0 : error.status);
        }
    }
    async showHiring() {
        try {
            const table = await this.hiringTableRepository.find();
            if (!table)
                throw new common_1.HttpException('Hiring table could not be fetched', common_1.HttpStatus.BAD_REQUEST);
            return table;
        }
        catch (error) {
            throw new common_1.HttpException(error === null || error === void 0 ? void 0 : error.message, error === null || error === void 0 ? void 0 : error.status);
        }
    }
    async mockHiringTable() {
        const hiringTable = new hiringTable_entity_1.HiringTable();
        hiringTable.enable = false;
        await this.hiringTableRepository.save(hiringTable);
    }
    async getSocietyBody() {
        try {
            const res = await this.hiringRepository.findBy({
                status: types_1.HiringStatus.APPROVED,
            });
            if (res) {
                return res;
            }
        }
        catch (error) {
            throw new common_1.HttpException('could not fetch body', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getSubmissions() {
        try {
            const res = await this.hiringRepository.find();
            if (res) {
                return res;
            }
        }
        catch (error) {
            throw new common_1.HttpException('could not fetch body', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getStatus(email) {
        try {
            const res = await this.hiringRepository.findOneBy({
                email,
            });
            if (!res) {
                throw new common_1.HttpException('record not found', common_1.HttpStatus.NOT_FOUND);
            }
            return res;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
HiringService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(hiring_entity_1.Hiring)),
    __param(2, (0, typeorm_1.InjectRepository)(hiringTable_entity_1.HiringTable)),
    __param(3, (0, common_1.Inject)(cloudinary_config_1.CloudinaryConfigService)),
    __param(4, (0, common_1.Inject)(mail_service_1.MailService)),
    __param(5, (0, common_1.Inject)(config_1.ConfigService)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        cloudinary_config_1.CloudinaryConfigService,
        mail_service_1.MailService,
        config_1.ConfigService])
], HiringService);
exports.HiringService = HiringService;
//# sourceMappingURL=hiring.service.js.map