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
exports.ResultsController = void 0;
const constants_1 = require("../../../libs/constants/src");
const common_1 = require("@nestjs/common");
const results_service_1 = require("./results.service");
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("../../../libs/dtos/src");
let ResultsController = class ResultsController {
    constructor(resultService) {
        this.resultService = resultService;
    }
    async setResult(body) {
        return this.resultService.setResult(body);
    }
    async getFixtures() {
        return this.resultService.getFixtures();
    }
    async getResults() {
        return this.resultService.getResults();
    }
};
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UpdateResultDto]),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "setResult", null);
__decorate([
    (0, common_1.Get)('fixtures'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "getFixtures", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "getResults", null);
ResultsController = __decorate([
    (0, swagger_1.ApiTags)(constants_1.SWAGGER_API_TAG.RESULTS),
    (0, common_1.Controller)('results'),
    __metadata("design:paramtypes", [results_service_1.ResultsService])
], ResultsController);
exports.ResultsController = ResultsController;
//# sourceMappingURL=results.controller.js.map