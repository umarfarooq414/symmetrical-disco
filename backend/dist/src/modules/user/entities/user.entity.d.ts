import { IUserParams, IUser, UserStatusEnum, UserRoleEnum } from '@lib/types';
import { Hiring } from 'src/modules/hiring/entities/hiring.entity';
import { Inventory } from 'src/modules/inventory/entities/inventory.entity';
export declare class User implements IUser {
    constructor(params?: IUserParams);
    readonly id: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    rollNumber?: string;
    status: UserStatusEnum;
    role: UserRoleEnum;
    hiring: Hiring;
    issued: Inventory[];
    readonly createdAt: Date;
    readonly updatedAt: Date;
    setStatus(status: UserStatusEnum): void;
    setPassword(password: string): void;
    setFirstName(firstName: string): void;
    setRole(role: UserRoleEnum): void;
    setLastName(lastName: string): void;
}
