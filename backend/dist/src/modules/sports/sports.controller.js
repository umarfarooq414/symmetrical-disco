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
exports.SportsController = void 0;
const constants_1 = require("../../../libs/constants/src");
const common_1 = require("@nestjs/common");
const sports_service_1 = require("./sports.service");
const createSports_1 = require("../../../libs/dtos/src/sports/createSports");
const updateSport_1 = require("../../../libs/dtos/src/sports/updateSport");
const swagger_1 = require("@nestjs/swagger");
let SportsController = class SportsController {
    constructor(sportsService) {
        this.sportsService = sportsService;
    }
    async createSports(body) {
        return await this.sportsService.createSports(body);
    }
    async getSports() {
        return await this.sportsService.getSports();
    }
    async getSportById(id) {
        return await this.sportsService.getSportById(id);
    }
    async updateSportById(id, body) {
        return await this.sportsService.updateSportById(id, body);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createSports_1.CreateSportsDto]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "createSports", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "getSports", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "getSportById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateSport_1.UpdateSportsDto]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "updateSportById", null);
SportsController = __decorate([
    (0, swagger_1.ApiTags)(constants_1.SWAGGER_API_TAG.SPORTS),
    (0, common_1.Controller)('sports'),
    __metadata("design:paramtypes", [sports_service_1.SportsService])
], SportsController);
exports.SportsController = SportsController;
//# sourceMappingURL=sports.controller.js.map