import { MaterialStatus, MaterialType } from '@lib/types';
import { User } from 'src/modules/user/entities/user.entity';
export declare class Inventory {
    readonly id: string;
    name: string;
    category: MaterialType;
    quantity: number;
    status: MaterialStatus;
    issueTo: User;
    issueBy: User;
}
