/// <reference types="multer" />
import { HiringRequestDto, HiringStatusChangeDto, ShowHiringDto } from '@lib/dtos';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { Hiring } from './entities/hiring.entity';
import { GlobalResponseDto } from '@lib/dtos/common';
import { CloudinaryConfigService } from '@config/cloudinary.config';
import { HiringTable } from './entities/hiringTable.entity';
import { MailService } from '../mail/mail.service';
import { ConfigService } from '@nestjs/config';
export declare class HiringService {
    private readonly userRepository;
    private readonly hiringRepository;
    private readonly hiringTableRepository;
    private readonly cloudinaryConfigService;
    private readonly mailService;
    private readonly configService;
    constructor(userRepository: Repository<User>, hiringRepository: Repository<Hiring>, hiringTableRepository: Repository<HiringTable>, cloudinaryConfigService: CloudinaryConfigService, mailService: MailService, configService: ConfigService);
    register(body: HiringRequestDto, file: Express.Multer.File): Promise<GlobalResponseDto>;
    changeStatus({ userId, status, }: HiringStatusChangeDto): Promise<GlobalResponseDto>;
    showHideHiring({ setting, }: ShowHiringDto): Promise<GlobalResponseDto>;
    showHiring(): Promise<HiringTable[]>;
    mockHiringTable(): Promise<void>;
    getSocietyBody(): Promise<Hiring[]>;
    getSubmissions(): Promise<Hiring[]>;
    getStatus(email: string): Promise<Hiring>;
}
