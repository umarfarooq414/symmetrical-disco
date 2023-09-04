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
exports.UserRegisterRequestDto = exports.CreateUserDto = void 0;
const types_1 = require("../../../types/src");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30, {
        message: `User name length must be less than 30`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30, {
        message: `First Name length must be less than 30`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30, {
        message: `Last Name length must be less than 30`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(7, {
        message: `Password must be at least 7 characters long`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(types_1.UserStatusEnum),
    __metadata("design:type", String)
], CreateUserDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(types_1.UserRoleEnum),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'file', required: false }),
    (0, class_transformer_1.Type)(() => common_1.UploadedFile),
    __metadata("design:type", Object)
], CreateUserDto.prototype, "file", void 0);
exports.CreateUserDto = CreateUserDto;
class UserRegisterRequestDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30, {
        message: 'Last Name length must be less than 30',
    }),
    (0, swagger_1.ApiProperty)({ example: 'Smith', description: 'Last Name of user' }),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        example: 'john.smith@demo.com',
        description: 'Email of the user',
    }),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(7, {
        message: 'Password must be at least 7 characters long',
    }),
    (0, swagger_1.ApiProperty)({
        example: 'password',
        description: 'Password for user. Must be 7 characters long.',
    }),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(7, {
        message: 'Password must be at least 7 characters long',
    }),
    (0, swagger_1.ApiProperty)({
        example: 'password',
        description: 'Password for user. Must be 7 characters long.',
    }),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "rollNumber", void 0);
exports.UserRegisterRequestDto = UserRegisterRequestDto;
//# sourceMappingURL=create-user.dto.js.map