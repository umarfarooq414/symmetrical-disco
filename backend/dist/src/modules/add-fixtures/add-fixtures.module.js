"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFixturesModule = void 0;
const team_entity_1 = require("../team-registration/entities/team-entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fixture_entity_1 = require("../fixtures/entites/fixture-entity");
const add_fixtures_controller_1 = require("./add-fixtures.controller");
const add_fixtures_service_1 = require("./add-fixtures.service");
const sports_entity_1 = require("../sports/entities/sports.entity");
let AddFixturesModule = class AddFixturesModule {
};
AddFixturesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fixture_entity_1.MatchFixture, team_entity_1.Teams, sports_entity_1.Sports])],
        controllers: [add_fixtures_controller_1.AddFixturesController],
        providers: [add_fixtures_service_1.AddFixturesService],
    })
], AddFixturesModule);
exports.AddFixturesModule = AddFixturesModule;
//# sourceMappingURL=add-fixtures.module.js.map