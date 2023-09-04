import { Repository } from 'typeorm';
import { MatchFixture } from '../fixtures/entites/fixture-entity';
import { Result } from './entites/results.entity';
import { UpdateResultDto } from '@lib/dtos';
import { Teams } from '../team-registration/entities/team-entity';
export declare class ResultsService {
    private resultRepository;
    private registrationRepo;
    private fixtureRepository;
    constructor(resultRepository: Repository<Result>, registrationRepo: Repository<Teams>, fixtureRepository: Repository<MatchFixture>);
    setResult(body: UpdateResultDto): Promise<Result>;
    getFixtures(): Promise<MatchFixture[]>;
    getResults(): Promise<Result[]>;
}
