import { SportsTypeEnum } from '@lib/types/db/entities/sports';
import { MatchFixture } from 'src/modules/fixtures/entites/fixture-entity';
import { Teams } from 'src/modules/team-registration/entities/team-entity';
import { Result } from 'src/modules/results/entites/results.entity';
export declare class Sports {
    id: string;
    sportsType: SportsTypeEnum;
    sportsName: string;
    sportsFee: number;
    minParticipants: number;
    maxParticipants: number;
    matches: MatchFixture[];
    teams: Teams[];
    result: Result[];
    readonly createdAt: Date;
    readonly updatedAt: Date;
    setSportsName(sportsName: string): void;
    setSportsFee(sportsFee: number): void;
    setMinParticipants(minParticipants: number): void;
    setMaxParticipants(maxParticipants: number): void;
    setSportsType(sportsType: SportsTypeEnum): void;
}
