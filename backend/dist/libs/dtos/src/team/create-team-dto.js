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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTeamDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
class CreateTeamDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeamDto.prototype, "teamName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeamDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeamDto.prototype, "captainName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    __metadata("design:type", String)
], CreateTeamDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'file', required: true }),
    (0, class_transformer_1.Type)(() => common_1.UploadedFile),
    __metadata("design:type", Object)
], CreateTeamDto.prototype, "paymentImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeamDto.prototype, "sports", void 0);
exports.CreateTeamDto = CreateTeamDto;
//# sourceMappingURL=create-team-dto.js.map