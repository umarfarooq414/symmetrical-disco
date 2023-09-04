import { User } from 'src/modules/user/entities/user.entity';
import { HiringStatus } from '@lib/types';
export declare class Hiring {
    readonly id: string;
    userName: string;
    email: string;
    position: string;
    phoneNumber: string;
    rollNumber: string;
    status: HiringStatus;
    user: User;
    photos: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
