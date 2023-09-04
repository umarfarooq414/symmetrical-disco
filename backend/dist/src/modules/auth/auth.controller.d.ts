import { User } from './../user/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthService } from './auth.service';
import { AuthorizeResponseDto, LoginRequestDto, UserRegisterRequestDto } from '@lib/dtos';
import { GlobalResponseDto } from '@lib/dtos/common';
import { UpdateAccessDto } from '@lib/dtos/auth/updateAccess';
import { UpdateStatusDto } from '@lib/dtos/auth/updateStatus';
export declare class AuthController {
    private readonly authService;
    private repository;
    constructor(authService: AuthService, repository: Repository<User>);
    socialLogin(): void;
    googleAuthRedirect(req: any): Promise<User | AuthorizeResponseDto | "No user from google">;
    RegisterUser(registerDto: UserRegisterRequestDto): Promise<User>;
    login(loginRequestDto: LoginRequestDto): Promise<AuthorizeResponseDto | never>;
    approveAccessUser(updateAccessDto: UpdateAccessDto): Promise<GlobalResponseDto>;
    approveStatusUser(updateStatusDto: UpdateStatusDto): Promise<GlobalResponseDto>;
}
