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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./../user/entities/user.entity");
const auth_helper_1 = require("./auth.helper");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const types_1 = require("../../../libs/types/src");
const dtos_1 = require("../../../libs/dtos/src");
const common_3 = require("../../../libs/dtos/src/common");
let AuthService = class AuthService {
    constructor(repository, authHelper) {
        this.repository = repository;
        this.authHelper = authHelper;
    }
    async socialLogin(req) {
        const { email, firstName, lastName, userName } = req.user;
        const user = await this.repository.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            const newUser = this.repository.create({
                email,
                firstName,
                lastName,
                userName,
            });
            await this.repository.save(newUser);
            if (newUser.role === types_1.UserRoleEnum.MEMBER &&
                newUser.status === types_1.UserStatusEnum.INACTIVE) {
                throw new common_2.HttpException('User needs approval!', common_2.HttpStatus.NOT_FOUND);
            }
            return newUser;
        }
        if (!user ||
            (user.role === types_1.UserRoleEnum.MEMBER &&
                user.status === types_1.UserStatusEnum.DEACTIVATE)) {
            throw new common_2.HttpException('No user found', common_2.HttpStatus.NOT_FOUND);
        }
        if (user.role === types_1.UserRoleEnum.MEMBER &&
            user.status === types_1.UserStatusEnum.INACTIVE) {
            throw new common_2.HttpException('User needs approval!', common_2.HttpStatus.NOT_FOUND);
        }
        const token = this.authHelper.token(user);
        return new dtos_1.AuthorizeResponseDto(user, token);
    }
    async registerUser(body) {
        const { email, password } = body;
        let user = await this.repository.findOne({ where: { email } });
        let rollUser = await this.repository.findOne({
            where: { rollNumber: body.rollNumber },
        });
        if (rollUser) {
            throw new common_2.HttpException('User already exit!', common_2.HttpStatus.CONFLICT);
        }
        if (user) {
            throw new common_2.HttpException('User already exit!', common_2.HttpStatus.CONFLICT);
        }
        user = new user_entity_1.User();
        user.email = body.email;
        user.role = types_1.UserRoleEnum.MEMBER;
        user.status = types_1.UserStatusEnum.INACTIVE;
        user.rollNumber = body.rollNumber;
        user.userName = body.userName;
        const hashedPassword = await this.authHelper.encodePassword(password);
        user.setPassword(hashedPassword);
        const newUser = await this.repository.save(user);
        return newUser;
    }
    async updateUserAccess(updateAccessDto) {
        const user = await this.repository.findOne({
            where: { id: updateAccessDto.userId },
        });
        if (!user)
            throw new common_2.HttpException('User not found!', common_2.HttpStatus.NOT_FOUND);
        user.setRole(updateAccessDto.role);
        await this.repository.save(user);
        let message = '';
        if (updateAccessDto.role === types_1.UserRoleEnum.COORDINATOR) {
            message = 'User Role Successfully updated to Coordinator!';
        }
        if (updateAccessDto.role === types_1.UserRoleEnum.ADMIN) {
            message = 'User Role Successfully updated to Admin!';
        }
        if (updateAccessDto.role === types_1.UserRoleEnum.PRESIDENT) {
            message = 'User Role Successfully updated to Member!';
        }
        return new common_3.GlobalResponseDto(message);
    }
    async updateUserStatus(updateStatusDto) {
        const user = await this.repository.findOne({
            where: { id: updateStatusDto.userId },
        });
        if (!user)
            throw new common_2.HttpException('User not found!', common_2.HttpStatus.NOT_FOUND);
        user.setStatus(updateStatusDto.status);
        await this.repository.save(user);
        const message = updateStatusDto.status === types_1.UserStatusEnum.ACTIVE
            ? 'User Successfully activated!'
            : 'User Successfully deactivated!';
        return new common_3.GlobalResponseDto(message);
    }
    async login(body) {
        console.log(body);
        const { email, password } = body;
        const user = await this.repository.findOne({
            where: { email },
        });
        if (!user || (user.role === types_1.UserRoleEnum.MEMBER && user.disable === true)) {
            throw new common_2.HttpException('User not found', common_2.HttpStatus.NOT_FOUND);
        }
        if (!user ||
            (user.role === types_1.UserRoleEnum.MEMBER &&
                user.status === types_1.UserStatusEnum.INACTIVE)) {
            throw new common_2.HttpException('User needs Approval', common_2.HttpStatus.NOT_FOUND);
        }
        const isPasswordValid = this.authHelper.isPasswordValid(password, user.password);
        if (!isPasswordValid) {
            throw new common_2.HttpException('Password Invalid!', common_2.HttpStatus.NOT_FOUND);
        }
        delete user.password;
        return new dtos_1.AuthorizeResponseDto(user, this.authHelper.generateToken(user));
    }
};
__decorate([
    __param(0, (0, common_2.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "socialLogin", null);
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_helper_1.AuthHelper])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map