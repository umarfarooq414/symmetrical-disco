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
exports.Result = void 0;
const fixture_entity_1 = require("../../fixtures/entites/fixture-entity");
const sports_entity_1 = require("../../sports/entities/sports.entity");
const team_entity_1 = require("../../team-registration/entities/team-entity");
const typeorm_1 = require("typeorm");
let Result = class Result {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Result.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Teams, { onDelete: 'CASCADE' }),
    __metadata("design:type", team_entity_1.Teams)
], Result.prototype, "winnerTeam", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Teams, { onDelete: 'CASCADE' }),
    __metadata("design:type", team_entity_1.Teams)
], Result.prototype, "loserTeam", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Result.prototype, "winnerPoints", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Result.prototype, "loserPoints", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => fixture_entity_1.MatchFixture, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", fixture_entity_1.MatchFixture)
], Result.prototype, "fixture", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sports_entity_1.Sports, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", sports_entity_1.Sports)
], Result.prototype, "sport", void 0);
Result = __decorate([
    (0, typeorm_1.Entity)()
], Result);
exports.Result = Result;
//# sourceMappingURL=results.entity.js.map