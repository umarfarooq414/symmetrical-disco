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
exports.Hiring = void 0;
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const types_1 = require("../../../../libs/types/src");
let Hiring = class Hiring {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(`uuid`),
    __metadata("design:type", String)
], Hiring.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 30,
        nullable: false,
    }),
    __metadata("design:type", String)
], Hiring.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Hiring.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 30,
        nullable: false,
    }),
    __metadata("design:type", String)
], Hiring.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 30,
        nullable: false,
    }),
    __metadata("design:type", String)
], Hiring.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 30,
        nullable: false,
    }),
    __metadata("design:type", String)
], Hiring.prototype, "rollNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: false,
        default: types_1.HiringStatus.PENDING,
        enum: types_1.HiringStatus,
    }),
    __metadata("design:type", String)
], Hiring.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.User)
], Hiring.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Hiring.prototype, "photos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Hiring.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Hiring.prototype, "updatedAt", void 0);
Hiring = __decorate([
    (0, typeorm_1.Entity)({ name: `hiring` })
], Hiring);
exports.Hiring = Hiring;
//# sourceMappingURL=hiring.entity.js.map