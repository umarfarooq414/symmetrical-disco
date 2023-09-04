/// <reference types="multer" />
import { HiringRequestDto, HiringStatusChangeDto, ShowHiringDto } from '@lib/dtos';
import { HiringService } from './hiring.service';
import { GlobalResponseDto } from '@lib/dtos/common';
import { Hiring } from './entities/hiring.entity';
import { HiringTable } from './entities/hiringTable.entity';
export declare class HiringController {
    private readonly hiringService;
    constructor(hiringService: HiringService);
    register(body: HiringRequestDto, file: Express.Multer.File): Promise<GlobalResponseDto>;
    changeStatus(body: HiringStatusChangeDto): Promise<GlobalResponseDto>;
    showHideHiring(body: ShowHiringDto): Promise<GlobalResponseDto>;
    showHiring(): Promise<HiringTable[]>;
    SocietyBody(): Promise<Hiring[]>;
    getSubmissions(): Promise<Hiring[]>;
    getStatus(email: string): Promise<Hiring>;
}
