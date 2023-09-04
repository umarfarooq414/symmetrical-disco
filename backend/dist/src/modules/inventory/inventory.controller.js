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
exports.InventoryController = void 0;
const constants_1 = require("../../../libs/constants/src");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_Material_dto_1 = require("./DTO/create-Material-dto");
const inventory_service_1 = require("./inventory.service");
const types_1 = require("../../../libs/types/src");
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    async getAll() {
        return await this.inventoryService.getAll();
    }
    async getById(id) {
        return await this.inventoryService.getById(id);
    }
    async getByCategory(category) {
        return await this.inventoryService.getByCategory(category);
    }
    async create(createMaterialDto) {
        return await this.inventoryService.create(createMaterialDto);
    }
    async update(id, updateMaterialDto) {
        return await this.inventoryService.update(id, updateMaterialDto);
    }
    async issueItem(issueMaterialDto) {
        return await this.inventoryService.issueItem(issueMaterialDto);
    }
    async returnItem(returnItemDto) {
        return await this.inventoryService.returnItem(returnItemDto);
    }
    async delete(id) {
        return await this.inventoryService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/category'),
    __param(0, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "getByCategory", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Material_dto_1.CreateMaterialDto]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_Material_dto_1.UpdateMaterialDto]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('/issue-item'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Material_dto_1.IssueMaterialDto]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "issueItem", null);
__decorate([
    (0, common_1.Put)('/return-item'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Material_dto_1.IssueMaterialDto]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "returnItem", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "delete", null);
InventoryController = __decorate([
    (0, swagger_1.ApiTags)(constants_1.SWAGGER_API_TAG.INVENTORY),
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
exports.InventoryController = InventoryController;
//# sourceMappingURL=inventory.controller.js.map