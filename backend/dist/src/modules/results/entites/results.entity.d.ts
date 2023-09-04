import { MatchFixture } from 'src/modules/fixtures/entites/fixture-entity';
import { Sports } from 'src/modules/sports/entities/sports.entity';
import { Teams } from 'src/modules/team-registration/entities/team-entity';
export declare class Result {
    id: string;
    winnerTeam: Teams;
    loserTeam: Teams;
    winnerPoints: number;
    loserPoints: number;
    fixture: MatchFixture;
    sport: Sports;
}
