import { IUser } from '@lib/types';
export declare class UserDto {
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
    constructor(user: IUser);
}
