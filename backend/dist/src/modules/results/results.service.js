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
exports.ResultsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fixture_entity_1 = require("../fixtures/entites/fixture-entity");
const results_entity_1 = require("./entites/results.entity");
const team_entity_1 = require("../team-registration/entities/team-entity");
let ResultsService = class ResultsService {
    constructor(resultRepository, registrationRepo, fixtureRepository) {
        this.resultRepository = resultRepository;
        this.registrationRepo = registrationRepo;
        this.fixtureRepository = fixtureRepository;
    }
    async setResult(body) {
        try {
            const { matchNo, teamA, teamB, pointsA, pointsB } = body;
            const foundFixture = await this.fixtureRepository.findOne({
                where: { matchNo },
                relations: ['sport'],
            });
            if (!foundFixture)
                throw new common_1.HttpException('Fixture/Match not found!', common_1.HttpStatus.NOT_FOUND);
            if (foundFixture.result)
                throw new common_1.HttpException('Result already added for this match', common_1.HttpStatus.CONFLICT);
            const winnerTeams = await this.registrationRepo.findOneBy({
                teamName: teamA,
            });
            const loserTeams = await this.registrationRepo.findOneBy({
                teamName: teamB,
            });
            if (!teamA || !teamB)
                throw new common_1.HttpException('Record for teams not found', common_1.HttpStatus.NOT_FOUND);
            const result = new results_entity_1.Result();
            result.fixture = foundFixture;
            result.sport = foundFixture.sport;
            result.winnerTeam = winnerTeams;
            result.loserTeam = loserTeams;
            result.winnerPoints = pointsA;
            result.loserPoints = pointsB;
            return await this.resultRepository.save(result);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async getFixtures() {
        return this.fixtureRepository.find({ relations: ['result'] });
    }
    async getResults() {
        return this.resultRepository.find({
            relations: ['fixture'],
        });
    }
};
ResultsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(results_entity_1.Result)),
    __param(1, (0, typeorm_1.InjectRepository)(team_entity_1.Teams)),
    __param(2, (0, typeorm_1.InjectRepository)(fixture_entity_1.MatchFixture)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ResultsService);
exports.ResultsService = ResultsService;
//# sourceMappingURL=results.service.js.map