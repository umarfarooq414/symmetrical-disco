import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
export declare class AuthHelper {
    private readonly repository;
    private readonly configService;
    private readonly jwt;
    constructor(jwt: JwtService);
    token(user: User): string;
    decode(token: string): Promise<unknown>;
    validateUser(decoded: any): Promise<User>;
    encodePassword(password: string): Promise<string>;
    isPasswordValid(password: string, userPassword: string): boolean;
    generateToken(user: User): string;
}
