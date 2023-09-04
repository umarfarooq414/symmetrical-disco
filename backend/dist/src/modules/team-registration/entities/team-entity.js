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
exports.Teams = void 0;
const typeorm_1 = require("typeorm");
const teamMembers_1 = require("./teamMembers");
const team_1 = require("../../../../libs/types/src/db/entities/team");
const sports_entity_1 = require("../../sports/entities/sports.entity");
const results_entity_1 = require("../../results/entites/results.entity");
let Teams = class Teams {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Teams.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teams.prototype, "teamName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teams.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teams.prototype, "captainName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teams.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => teamMembers_1.TeamMember, (teamMember) => teamMember.team, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Teams.prototype, "members", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sports_entity_1.Sports, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", sports_entity_1.Sports)
], Teams.prototype, "sport", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => results_entity_1.Result, (result) => result.winnerTeam, {
        cascade: true,
    }),
    __metadata("design:type", results_entity_1.Result)
], Teams.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Teams.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: team_1.TeamRegistrationStatus.PENDING }),
    __metadata("design:type", String)
], Teams.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Teams.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Teams.prototype, "updatedAt", void 0);
Teams = __decorate([
    (0, typeorm_1.Entity)('registration')
], Teams);
exports.Teams = Teams;
//# sourceMappingURL=team-entity.js.map