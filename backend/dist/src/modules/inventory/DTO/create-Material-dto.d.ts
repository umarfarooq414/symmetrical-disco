import { MaterialStatus, MaterialType } from '@lib/types';
export declare class CreateMaterialDto {
    name: string;
    category: MaterialType;
    quantity: number;
    status: MaterialStatus;
}
export declare class UpdateMaterialDto {
    name: string;
    category: MaterialType;
    quantity: number;
    status: MaterialStatus;
}
export declare class IssueMaterialDto {
    id: string;
    quantity: number;
    issueTo: string;
    issueBy: string;
    status: MaterialStatus;
}
