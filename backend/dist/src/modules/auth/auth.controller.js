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
exports.AuthController = void 0;
const constants_1 = require("../../../libs/constants/src");
const user_entity_1 = require("./../user/entities/user.entity");
const google_guards_1 = require("./../../guards/google.guards");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_service_1 = require("./auth.service");
const dtos_1 = require("../../../libs/dtos/src");
const swagger_1 = require("@nestjs/swagger");
const updateAccess_1 = require("../../../libs/dtos/src/auth/updateAccess");
const updateStatus_1 = require("../../../libs/dtos/src/auth/updateStatus");
let AuthController = class AuthController {
    constructor(authService, repository) {
        this.authService = authService;
        this.repository = repository;
    }
    socialLogin() { }
    async googleAuthRedirect(req) {
        if (!req.user) {
            return 'No user from google';
        }
        return this.authService.socialLogin(req);
    }
    async RegisterUser(registerDto) {
        return await this.authService.registerUser(registerDto);
    }
    async login(loginRequestDto) {
        return await this.authService.login(loginRequestDto);
    }
    async approveAccessUser(updateAccessDto) {
        return await this.authService.updateUserAccess(updateAccessDto);
    }
    async approveStatusUser(updateStatusDto) {
        return await this.authService.updateUserStatus(updateStatusDto);
    }
};
__decorate([
    (0, common_1.UseGuards)(google_guards_1.GoogleOAuthGuard),
    (0, common_1.Get)('social-login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "socialLogin", null);
__decorate([
    (0, common_1.UseGuards)(google_guards_1.GoogleOAuthGuard),
    (0, common_1.Get)('redirect'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    (0, common_1.Post)('registerUser'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Register User' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User created!',
        type: user_entity_1.User,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UserRegisterRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "RegisterUser", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Login User' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully login!' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found!' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.LoginRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, common_1.Put)('/update-access'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateAccess_1.UpdateAccessDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "approveAccessUser", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, common_1.Put)('/update-status'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateStatus_1.UpdateStatusDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "approveStatusUser", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)(constants_1.SWAGGER_API_TAG.AUTH),
    (0, common_1.Controller)('auth'),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        typeorm_2.Repository])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map