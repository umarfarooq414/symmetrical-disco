import { Repository } from 'typeorm';
import { MatchFixture } from '../fixtures/entites/fixture-entity';
import { CreateMatchFixtureDto } from './DTO/add-fixture-dto';
import { Teams } from '../team-registration/entities/team-entity';
import { Sports } from '../sports/entities/sports.entity';
export declare class AddFixturesService {
    private readonly matchFixtureRepository;
    private readonly registrationRepo;
    private readonly sportsRepo;
    constructor(matchFixtureRepository: Repository<MatchFixture>, registrationRepo: Repository<Teams>, sportsRepo: Repository<Sports>);
    createFixture(createMatchFixtureDto: CreateMatchFixtureDto): Promise<{
        message: string;
    }>;
}
