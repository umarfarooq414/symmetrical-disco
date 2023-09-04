import { CreateMaterialDto, IssueMaterialDto, UpdateMaterialDto } from './DTO/create-Material-dto';
import { Inventory } from './entities/inventory.entity';
import { InventoryService } from './inventory.service';
import { MaterialType } from '@lib/types';
import { GlobalResponseDto } from '@lib/dtos/common';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    getAll(): Promise<Inventory[]>;
    getById(id: string): Promise<Inventory>;
    getByCategory(category: MaterialType): Promise<Inventory[]>;
    create(createMaterialDto: CreateMaterialDto): Promise<Inventory>;
    update(id: string, updateMaterialDto: UpdateMaterialDto): Promise<Inventory>;
    issueItem(issueMaterialDto: IssueMaterialDto): Promise<Inventory>;
    returnItem(returnItemDto: IssueMaterialDto): Promise<Inventory>;
    delete(id: string): Promise<GlobalResponseDto>;
}
