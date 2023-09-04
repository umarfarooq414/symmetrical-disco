import { Result } from 'src/modules/results/entites/results.entity';
import { Sports } from 'src/modules/sports/entities/sports.entity';
export declare class MatchFixture {
    matchNo: number;
    teamA: string;
    teamB: string;
    venue: string;
    date: Date;
    time: string;
    result?: Result;
    sport: Sports;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
