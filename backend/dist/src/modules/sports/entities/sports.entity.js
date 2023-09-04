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
exports.Sports = void 0;
const typeorm_1 = require("typeorm");
const sports_1 = require("../../../../libs/types/src/db/entities/sports");
const fixture_entity_1 = require("../../fixtures/entites/fixture-entity");
const team_entity_1 = require("../../team-registration/entities/team-entity");
const results_entity_1 = require("../../results/entites/results.entity");
let Sports = class Sports {
    setSportsName(sportsName) {
        this.sportsName = sportsName;
    }
    setSportsFee(sportsFee) {
        this.sportsFee = sportsFee;
    }
    setMinParticipants(minParticipants) {
        this.minParticipants = minParticipants;
    }
    setMaxParticipants(maxParticipants) {
        this.maxParticipants = maxParticipants;
    }
    setSportsType(sportsType) {
        this.sportsType = sportsType;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(`uuid`),
    __metadata("design:type", String)
], Sports.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'enum',
        enum: sports_1.SportsTypeEnum,
    }),
    __metadata("design:type", String)
], Sports.prototype, "sportsType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Sports.prototype, "sportsName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], Sports.prototype, "sportsFee", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], Sports.prototype, "minParticipants", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], Sports.prototype, "maxParticipants", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => fixture_entity_1.MatchFixture, (fixtures) => fixtures.sport, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Sports.prototype, "matches", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => team_entity_1.Teams, (registration) => registration.sport, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Sports.prototype, "teams", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => results_entity_1.Result, (result) => result.sport, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Sports.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Sports.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Sports.prototype, "updatedAt", void 0);
Sports = __decorate([
    (0, typeorm_1.Entity)({ name: `sports` })
], Sports);
exports.Sports = Sports;
//# sourceMappingURL=sports.entity.js.map