import { CreateMatchFixtureDto } from './DTO/add-fixture-dto';
import { AddFixturesService } from './add-fixtures.service';
export declare class AddFixturesController {
    private readonly addFixturesService;
    constructor(addFixturesService: AddFixturesService);
    createFixture(createMatchFixtureDto: CreateMatchFixtureDto): Promise<{
        message: string;
    }>;
}
