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
exports.AddFixturesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fixture_entity_1 = require("../fixtures/entites/fixture-entity");
const team_entity_1 = require("../team-registration/entities/team-entity");
const sports_entity_1 = require("../sports/entities/sports.entity");
const team_1 = require("../../../libs/types/src/db/entities/team");
let AddFixturesService = class AddFixturesService {
    constructor(matchFixtureRepository, registrationRepo, sportsRepo) {
        this.matchFixtureRepository = matchFixtureRepository;
        this.registrationRepo = registrationRepo;
        this.sportsRepo = sportsRepo;
    }
    async createFixture(createMatchFixtureDto) {
        try {
            const sports = await this.sportsRepo.findOneBy({
                sportsName: createMatchFixtureDto.sports,
            });
            const matchFixture = {
                teamA: createMatchFixtureDto.TeamA,
                teamB: createMatchFixtureDto.TeamB,
                venue: createMatchFixtureDto.Venue,
                date: createMatchFixtureDto.date,
                time: createMatchFixtureDto.time,
                sport: sports,
            };
            const teamA = await this.registrationRepo.findOneBy({
                teamName: matchFixture.teamA,
            });
            const teamB = await this.registrationRepo.findOneBy({
                teamName: matchFixture.teamB,
            });
            if (!sports || !teamA || !teamB)
                throw new common_1.HttpException('Record for teams or sport not found', common_1.HttpStatus.NOT_FOUND);
            if (teamA.status === team_1.TeamRegistrationStatus.PENDING ||
                teamA.status === team_1.TeamRegistrationStatus.REJECTED) {
                throw new common_1.HttpException(`${teamA.teamName} registration is not approved yet`, common_1.HttpStatus.BAD_REQUEST);
            }
            if (teamB.status === team_1.TeamRegistrationStatus.PENDING ||
                teamB.status === team_1.TeamRegistrationStatus.REJECTED) {
                throw new common_1.HttpException(`${teamB.teamName} registration is not approved yet`, common_1.HttpStatus.BAD_REQUEST);
            }
            const res = await this.matchFixtureRepository.save(matchFixture);
            if (!res)
                throw new common_1.HttpException('Failed to create fixture', common_1.HttpStatus.BAD_REQUEST);
            console.log(res);
            return { message: 'Fixture Added Successfully!' };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
AddFixturesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fixture_entity_1.MatchFixture)),
    __param(1, (0, typeorm_1.InjectRepository)(team_entity_1.Teams)),
    __param(2, (0, typeorm_1.InjectRepository)(sports_entity_1.Sports)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AddFixturesService);
exports.AddFixturesService = AddFixturesService;
//# sourceMappingURL=add-fixtures.service.js.map