export declare enum UserStatusEnum {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    DEACTIVATE = "DEACTIVATE"
}
export declare enum UserRoleEnum {
    ADMIN = "ADMIN",
    PRESIDENT = "PRESIDENT",
    COORDINATOR = "COORDINATOR",
    MEMBER = "MEMBER"
}
export declare enum SocialProviderEnum {
    GOOGLE = "google",
    FACEBOOK = "FACEBOOK"
}
export interface IUser {
    id?: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    salt?: string;
    status?: UserStatusEnum;
    role?: UserRoleEnum;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IUserParams {
    userName?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    status?: UserStatusEnum;
    role?: UserRoleEnum;
    socialProvide?: SocialProviderEnum;
}
