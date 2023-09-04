import { UserDto } from "../user";
export declare class AuthorizeResponseDto {
    user: UserDto;
    access_token: string;
    constructor(user: UserDto, access_token: string);
}
