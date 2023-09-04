/// <reference types="multer" />
export declare class HiringRequestDto {
    userName: string;
    email: string;
    position: string;
    phoneNumber: string;
    rollNumber: string;
    image: Express.Multer.File;
}
