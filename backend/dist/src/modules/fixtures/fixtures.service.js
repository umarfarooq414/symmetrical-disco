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
exports.FixturesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fixture_entity_1 = require("./entites/fixture-entity");
let FixturesService = class FixturesService {
    constructor(matchFixtureRepository) {
        this.matchFixtureRepository = matchFixtureRepository;
    }
    async getCurrentAndNextDayFixtures() {
        const currentDate = new Date();
        const nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        const startOfDay = new Date(currentDate.setHours(0, 0, 0, 0));
        const endOfNextDay = new Date(nextDay.setHours(23, 59, 59, 999));
        return this.matchFixtureRepository.find({
            where: {
                date: (0, typeorm_2.Between)(startOfDay, endOfNextDay),
            },
        });
    }
};
FixturesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fixture_entity_1.MatchFixture)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FixturesService);
exports.FixturesService = FixturesService;
//# sourceMappingURL=fixtures.service.js.map