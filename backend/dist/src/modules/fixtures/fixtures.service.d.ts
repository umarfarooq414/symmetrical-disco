import { Repository } from "typeorm";
import { MatchFixture } from "./entites/fixture-entity";
export declare class FixturesService {
    private readonly matchFixtureRepository;
    constructor(matchFixtureRepository: Repository<MatchFixture>);
    getCurrentAndNextDayFixtures(): Promise<MatchFixture[]>;
}
