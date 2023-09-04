import { CreateUserDto, UpdateUserDto } from '@lib/dtos';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { AuthHelper } from '../auth/auth.helper';
export declare class UserService {
    private readonly userRepository;
    private readonly config;
    private helper;
    constructor(userRepository: Repository<User>, config: ConfigService, helper: AuthHelper);
    createAdmin(): Promise<void>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<void>;
}
