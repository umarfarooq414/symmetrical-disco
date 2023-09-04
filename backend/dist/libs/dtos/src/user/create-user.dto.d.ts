/// <reference types="multer" />
import { UserStatusEnum, UserRoleEnum } from '@lib/types';
export declare class CreateUserDto {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    status?: UserStatusEnum;
    role?: UserRoleEnum;
    file: Express.Multer.File;
}
export declare class UserRegisterRequestDto {
    readonly userName: string;
    readonly email: string;
    password: string;
    rollNumber: string;
}
