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
exports.SportsService = void 0;
const common_1 = require("@nestjs/common");
const sports_entity_1 = require("./entities/sports.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SportsService = class SportsService {
    async createSports(createSports) {
        try {
            const { sportsName, minParticipants, maxParticipants, sportsFee, sportsType, } = createSports;
            const existingSports = await this.sportsRepo.findOneBy({ sportsName });
            if (existingSports)
                throw new common_1.HttpException('Sport already exists!', common_1.HttpStatus.CONFLICT);
            const sports = new sports_entity_1.Sports();
            sports.sportsName = sportsName;
            sports.minParticipants = minParticipants;
            sports.maxParticipants = maxParticipants;
            sports.sportsFee = sportsFee;
            sports.sportsType = sportsType;
            const savedSport = await this.sportsRepo.save(sports);
            delete savedSport.id;
            return savedSport;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async getSports() {
        return await this.sportsRepo.find({
            relations: [
                'teams',
                'matches',
                'result',
                'result.winnerTeam',
                'result.loserTeam',
            ],
        });
    }
    async getSportById(id) {
        const existingSports = await this.sportsRepo.findOneBy({ id });
        if (!existingSports)
            throw new common_1.HttpException('Sport not found!', common_1.HttpStatus.NOT_FOUND);
        return existingSports;
    }
    async updateSportById(id, body) {
        const existingSports = await this.sportsRepo.findOneBy({ id });
        if (!existingSports)
            throw new common_1.HttpException('Sport not found!', common_1.HttpStatus.NOT_FOUND);
        const updatedSports = Object.assign(existingSports, body);
        await this.sportsRepo.save(updatedSports);
        return updatedSports;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(sports_entity_1.Sports),
    __metadata("design:type", typeorm_2.Repository)
], SportsService.prototype, "sportsRepo", void 0);
SportsService = __decorate([
    (0, common_1.Injectable)()
], SportsService);
exports.SportsService = SportsService;
//# sourceMappingURL=sports.service.js.map