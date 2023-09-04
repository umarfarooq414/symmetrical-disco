import { MatchFixture } from '../fixtures/entites/fixture-entity';
import { Result } from './entites/results.entity';
import { ResultsService } from './results.service';
import { UpdateResultDto } from '@lib/dtos';
export declare class ResultsController {
    private readonly resultService;
    constructor(resultService: ResultsService);
    setResult(body: UpdateResultDto): Promise<Result>;
    getFixtures(): Promise<MatchFixture[]>;
    getResults(): Promise<Result[]>;
}
