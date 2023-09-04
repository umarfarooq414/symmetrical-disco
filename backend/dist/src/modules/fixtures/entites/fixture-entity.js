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
exports.MatchFixture = void 0;
const results_entity_1 = require("../../results/entites/results.entity");
const sports_entity_1 = require("../../sports/entities/sports.entity");
const typeorm_1 = require("typeorm");
let MatchFixture = class MatchFixture {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MatchFixture.prototype, "matchNo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MatchFixture.prototype, "teamA", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MatchFixture.prototype, "teamB", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MatchFixture.prototype, "venue", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], MatchFixture.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], MatchFixture.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => results_entity_1.Result, (result) => result.fixture, { eager: true }),
    __metadata("design:type", results_entity_1.Result)
], MatchFixture.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sports_entity_1.Sports, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", sports_entity_1.Sports)
], MatchFixture.prototype, "sport", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MatchFixture.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MatchFixture.prototype, "updatedAt", void 0);
MatchFixture = __decorate([
    (0, typeorm_1.Entity)()
], MatchFixture);
exports.MatchFixture = MatchFixture;
//# sourceMappingURL=fixture-entity.js.map