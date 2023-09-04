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
exports.InventoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inventory_entity_1 = require("./entities/inventory.entity");
const types_1 = require("../../../libs/types/src");
const common_2 = require("../../../libs/dtos/src/common");
const user_entity_1 = require("../user/entities/user.entity");
let InventoryService = class InventoryService {
    constructor(inventoryRepository, userRepo) {
        this.inventoryRepository = inventoryRepository;
        this.userRepo = userRepo;
    }
    async getAll() {
        try {
            const res = await this.inventoryRepository.find({
                relations: ['issueTo', 'issueBy'],
            });
            if (res) {
                return res;
            }
        }
        catch (error) {
            throw new common_1.HttpException('Could not get items', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getById(id) {
        try {
            const res = await this.inventoryRepository.findOne({
                where: { id },
                relations: ['issueTo', 'issueBy'],
            });
            if (res) {
                return res;
            }
        }
        catch (error) {
            throw new common_1.HttpException('Could not get item', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getByCategory(category) {
        try {
            const res = await this.inventoryRepository.find({
                where: { category },
                relations: ['issueTo', 'issueBy'],
            });
            if (res) {
                return res;
            }
        }
        catch (error) {
            throw new common_1.HttpException('Could not get items', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async create(inventory) {
        try {
            const material = new inventory_entity_1.Inventory();
            material.category = inventory.category;
            material.name = inventory.name;
            material.quantity = inventory.quantity;
            material.status = inventory.status;
            const res = this.inventoryRepository.save(material);
            if (res) {
                return res;
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async update(id, material) {
        try {
            const existingMaterial = await this.inventoryRepository.findOneBy({
                id,
            });
            if (!existingMaterial)
                throw new common_1.HttpException('material/item not found', common_1.HttpStatus.NOT_FOUND);
            const updatedInventory = Object.assign(Object.assign({}, existingMaterial), material);
            const res = await this.inventoryRepository.save(updatedInventory);
            if (res) {
                return res;
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async delete(id) {
        try {
            const existingMaterial = await this.inventoryRepository.findOneBy({ id });
            if (!existingMaterial)
                throw new common_1.HttpException('material/item not found', common_1.HttpStatus.NOT_FOUND);
            const res = await this.inventoryRepository.delete(id);
            if (res) {
                return new common_2.GlobalResponseDto('item deleted successfully!');
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async issueItem(issueDto) {
        try {
            const issuer = await this.userRepo.findOneBy({ id: issueDto.issueBy });
            const issued = await this.userRepo.findOneBy({ id: issueDto.issueTo });
            if (!issuer || !issued)
                throw new common_1.HttpException('Issuer/issued to user not found!', common_1.HttpStatus.NOT_FOUND);
            const existingMaterial = await this.inventoryRepository.findOne({
                where: { id: issueDto.id },
                relations: ['issueTo', 'issueBy'],
            });
            if (!existingMaterial)
                throw new common_1.HttpException('material not found!', common_1.HttpStatus.NOT_FOUND);
            if (existingMaterial.quantity === 0) {
                existingMaterial.status = types_1.MaterialStatus.NOT_AVAILABLE;
                await this.inventoryRepository.save(existingMaterial);
                throw new common_1.HttpException('material not available!', common_1.HttpStatus.NOT_FOUND);
            }
            if (issueDto.quantity <= existingMaterial.quantity) {
                existingMaterial.issueBy = issuer;
                existingMaterial.issueTo = issued;
                existingMaterial.quantity -= issueDto.quantity;
                existingMaterial.status = types_1.MaterialStatus.ISSUED;
                return await this.inventoryRepository.save(existingMaterial);
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async returnItem(returnItem) {
        try {
            const issuer = await this.userRepo.findOneBy({ id: returnItem.issueBy });
            const issued = await this.userRepo.findOneBy({ id: returnItem.issueTo });
            if (!issuer || !issued)
                throw new common_1.HttpException('Issuer/issued to user not found!', common_1.HttpStatus.NOT_FOUND);
            const existingMaterial = await this.inventoryRepository.findOne({
                where: { id: returnItem.id },
                relations: ['issueTo', 'issueBy'],
            });
            if (!existingMaterial)
                throw new common_1.HttpException('material not found!', common_1.HttpStatus.NOT_FOUND);
            existingMaterial.issueBy = issuer;
            existingMaterial.issueTo = issued;
            existingMaterial.quantity += returnItem.quantity;
            existingMaterial.status = types_1.MaterialStatus.AVAILABLE;
            return await this.inventoryRepository.save(existingMaterial);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
InventoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inventory_entity_1.Inventory)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], InventoryService);
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory.service.js.map