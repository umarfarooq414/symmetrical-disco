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
exports.IssueMaterialDto = exports.UpdateMaterialDto = exports.CreateMaterialDto = void 0;
const types_1 = require("../../../../libs/types/src");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMaterialDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(types_1.MaterialType),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateMaterialDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(types_1.MaterialStatus),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "status", void 0);
exports.CreateMaterialDto = CreateMaterialDto;
class UpdateMaterialDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMaterialDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(types_1.MaterialType),
    __metadata("design:type", String)
], UpdateMaterialDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', required: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateMaterialDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(types_1.MaterialStatus),
    __metadata("design:type", String)
], UpdateMaterialDto.prototype, "status", void 0);
exports.UpdateMaterialDto = UpdateMaterialDto;
class IssueMaterialDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IssueMaterialDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IssueMaterialDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'issued to id', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IssueMaterialDto.prototype, "issueTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'issuer to id', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IssueMaterialDto.prototype, "issueBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(types_1.MaterialStatus),
    __metadata("design:type", String)
], IssueMaterialDto.prototype, "status", void 0);
exports.IssueMaterialDto = IssueMaterialDto;
//# sourceMappingURL=create-Material-dto.js.map