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
exports.AddFixturesController = void 0;
const common_1 = require("@nestjs/common");
const add_fixture_dto_1 = require("./DTO/add-fixture-dto");
const add_fixtures_service_1 = require("./add-fixtures.service");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../../libs/constants/src");
let AddFixturesController = class AddFixturesController {
    constructor(addFixturesService) {
        this.addFixturesService = addFixturesService;
    }
    async createFixture(createMatchFixtureDto) {
        return await this.addFixturesService.createFixture(createMatchFixtureDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_fixture_dto_1.CreateMatchFixtureDto]),
    __metadata("design:returntype", Promise)
], AddFixturesController.prototype, "createFixture", null);
AddFixturesController = __decorate([
    (0, swagger_1.ApiTags)(constants_1.SWAGGER_API_TAG.ADDFIXTURES),
    (0, common_1.Controller)('fixtures/add-fixtures'),
    __metadata("design:paramtypes", [add_fixtures_service_1.AddFixturesService])
], AddFixturesController);
exports.AddFixturesController = AddFixturesController;
//# sourceMappingURL=add-fixtures.controller.js.map