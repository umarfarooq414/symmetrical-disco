import { SportsTypeEnum } from '@lib/types/db/entities/sports';
export declare class CreateSportsDto {
    sportsName: string;
    sportsType: SportsTypeEnum;
    sportsFee: number;
    minParticipants: number;
    maxParticipants: number;
}
