import { User } from './../user/entities/user.entity';
import { AuthHelper } from './auth.helper';
import { Repository } from 'typeorm';
import { AuthorizeResponseDto, LoginRequestDto, UserRegisterRequestDto } from '@lib/dtos';
import { UpdateAccessDto } from '@lib/dtos/auth/updateAccess';
import { GlobalResponseDto } from '@lib/dtos/common';
import { UpdateStatusDto } from '@lib/dtos/auth/updateStatus';
export declare class AuthService {
    private repository;
    private authHelper;
    constructor(repository: Repository<User>, authHelper: AuthHelper);
    socialLogin(req: any): Promise<User | AuthorizeResponseDto>;
    registerUser(body: UserRegisterRequestDto): Promise<User | never>;
    updateUserAccess(updateAccessDto: UpdateAccessDto): Promise<GlobalResponseDto>;
    updateUserStatus(updateStatusDto: UpdateStatusDto): Promise<GlobalResponseDto>;
    login(body: LoginRequestDto): Promise<AuthorizeResponseDto | never>;
}
