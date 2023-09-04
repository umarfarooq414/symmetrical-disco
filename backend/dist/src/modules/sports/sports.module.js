"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsModule = void 0;
const common_1 = require("@nestjs/common");
const sports_controller_1 = require("./sports.controller");
const sports_service_1 = require("./sports.service");
const typeorm_1 = require("@nestjs/typeorm");
const sports_entity_1 = require("./entities/sports.entity");
const fixture_entity_1 = require("../fixtures/entites/fixture-entity");
const team_entity_1 = require("../team-registration/entities/team-entity");
let SportsModule = class SportsModule {
};
SportsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sports_entity_1.Sports, fixture_entity_1.MatchFixture, team_entity_1.Teams])],
        controllers: [sports_controller_1.SportsController],
        providers: [sports_service_1.SportsService],
    })
], SportsModule);
exports.SportsModule = SportsModule;
//# sourceMappingURL=sports.module.js.map