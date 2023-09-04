import { FixturesService } from './fixtures.service';
import { MatchFixture } from './entites/fixture-entity';
export declare class FixturesController {
    private readonly matchFixtureService;
    constructor(matchFixtureService: FixturesService);
    getFixtures(): Promise<MatchFixture[]>;
}
