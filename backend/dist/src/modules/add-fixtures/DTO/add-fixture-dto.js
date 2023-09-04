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
exports.CreateMatchFixtureDto = void 0;
const class_validator_1 = require("class-validator");
const custom_time_dto_1 = require("./custom-time-dto");
const swagger_1 = require("@nestjs/swagger");
class CreateMatchFixtureDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'BhauKaal', required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMatchFixtureDto.prototype, "TeamA", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'Carnage', required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMatchFixtureDto.prototype, "TeamB", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'place where match will be held',
        example: 'FCIT Ground A ',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMatchFixtureDto.prototype, "Venue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'Date', example: '2024-01-01', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateMatchFixtureDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '05:00', required: true }),
    (0, custom_time_dto_1.IsTimeFormat)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMatchFixtureDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'cricket', required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMatchFixtureDto.prototype, "sports", void 0);
exports.CreateMatchFixtureDto = CreateMatchFixtureDto;
//# sourceMappingURL=add-fixture-dto.js.map