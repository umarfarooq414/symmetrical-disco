import { Repository } from 'typeorm';
import { CreateMaterialDto, IssueMaterialDto, UpdateMaterialDto } from './DTO/create-Material-dto';
import { Inventory } from './entities/inventory.entity';
import { MaterialType } from '@lib/types';
import { GlobalResponseDto } from '@lib/dtos/common';
import { User } from '../user/entities/user.entity';
export declare class InventoryService {
    private readonly inventoryRepository;
    private readonly userRepo;
    constructor(inventoryRepository: Repository<Inventory>, userRepo: Repository<User>);
    getAll(): Promise<Inventory[]>;
    getById(id: string): Promise<Inventory>;
    getByCategory(category: MaterialType): Promise<Inventory[]>;
    create(inventory: CreateMaterialDto): Promise<Inventory>;
    update(id: string, material: UpdateMaterialDto): Promise<Inventory>;
    delete(id: string): Promise<GlobalResponseDto>;
    issueItem(issueDto: IssueMaterialDto): Promise<Inventory>;
    returnItem(returnItem: IssueMaterialDto): Promise<Inventory>;
}
