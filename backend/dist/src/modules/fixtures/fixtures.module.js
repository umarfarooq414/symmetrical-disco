"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixturesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fixture_entity_1 = require("./entites/fixture-entity");
const fixtures_controller_1 = require("./fixtures.controller");
const fixtures_service_1 = require("./fixtures.service");
let FixturesModule = class FixturesModule {
};
FixturesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fixture_entity_1.MatchFixture])],
        controllers: [fixtures_controller_1.FixturesController],
        providers: [fixtures_service_1.FixturesService]
    })
], FixturesModule);
exports.FixturesModule = FixturesModule;
//# sourceMappingURL=fixtures.module.js.map