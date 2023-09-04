import { TeamMember } from './teamMembers';
import { TeamRegistrationStatus } from '@lib/types/db/entities/team';
import { Sports } from 'src/modules/sports/entities/sports.entity';
import { Result } from 'src/modules/results/entites/results.entity';
export declare class Teams {
    id: string;
    teamName: string;
    email: string;
    captainName: string;
    phoneNumber: string;
    members: TeamMember[];
    sport: Sports;
    result: Result;
    image: string;
    status: TeamRegistrationStatus;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
