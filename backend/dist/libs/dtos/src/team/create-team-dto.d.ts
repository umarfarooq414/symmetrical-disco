/// <reference types="multer" />
import { TeamMemberDto } from './team-member-dto';
export declare class CreateTeamDto {
    teamName: string;
    email: string;
    captainName: string;
    phoneNumber: string;
    members: TeamMemberDto[] | any;
    paymentImage?: Express.Multer.File;
    sports: string;
}
