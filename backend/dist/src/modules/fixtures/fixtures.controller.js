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
exports.FixturesController = void 0;
const constants_1 = require("../../../libs/constants/src");
const common_1 = require("@nestjs/common");
const fixtures_service_1 = require("./fixtures.service");
const swagger_1 = require("@nestjs/swagger");
let FixturesController = class FixturesController {
    constructor(matchFixtureService) {
        this.matchFixtureService = matchFixtureService;
    }
    async getFixtures() {
        return await this.matchFixtureService.getCurrentAndNextDayFixtures();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FixturesController.prototype, "getFixtures", null);
FixturesController = __decorate([
    (0, swagger_1.ApiTags)(constants_1.SWAGGER_API_TAG.FIXTURES),
    (0, common_1.Controller)('fixtures'),
    __metadata("design:paramtypes", [fixtures_service_1.FixturesService])
], FixturesController);
exports.FixturesController = FixturesController;
//# sourceMappingURL=fixtures.controller.js.map