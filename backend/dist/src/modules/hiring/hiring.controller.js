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
exports.HiringController = void 0;
const constants_1 = require("../../../libs/constants/src");
const dtos_1 = require("../../../libs/dtos/src");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const hiring_service_1 = require("./hiring.service");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const roles_guard_1 = require("../../guards/roles.guard");
const types_1 = require("../../../libs/types/src");
let HiringController = class HiringController {
    constructor(hiringService) {
        this.hiringService = hiringService;
    }
    async register(body, file) {
        return await this.hiringService.register(body, file);
    }
    async changeStatus(body) {
        return await this.hiringService.changeStatus(body);
    }
    async showHideHiring(body) {
        return await this.hiringService.showHideHiring(body);
    }
    async showHiring() {
        return await this.hiringService.showHiring();
    }
    async SocietyBody() {
        return await this.hiringService.getSocietyBody();
    }
    async getSubmissions() {
        return await this.hiringService.getSubmissions();
    }
    async getStatus(email) {
        return await this.hiringService.getStatus(email);
    }
};
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.HiringRequestDto, Object]),
    __metadata("design:returntype", Promise)
], HiringController.prototype, "register", null);
__decorate([
    (0, common_1.Put)('change-status'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.HiringStatusChangeDto]),
    __metadata("design:returntype", Promise)
], HiringController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, types_1.UserRole)(types_1.UserRoleEnum.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)('show-hide-hiring'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.ShowHiringDto]),
    __metadata("design:returntype", Promise)
], HiringController.prototype, "showHideHiring", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, types_1.UserRole)(types_1.UserRoleEnum.ADMIN),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('show-hiring'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HiringController.prototype, "showHiring", null);
__decorate([
    (0, common_1.Get)('get-society'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HiringController.prototype, "SocietyBody", null);
__decorate([
    (0, common_1.Get)('get-submissions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HiringController.prototype, "getSubmissions", null);
__decorate([
    (0, common_1.Get)('get-status/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HiringController.prototype, "getStatus", null);
HiringController = __decorate([
    (0, swagger_1.ApiTags)(constants_1.SWAGGER_API_TAG.HIRING),
    (0, common_1.Controller)('hiring'),
    __metadata("design:paramtypes", [hiring_service_1.HiringService])
], HiringController);
exports.HiringController = HiringController;
//# sourceMappingURL=hiring.controller.js.map