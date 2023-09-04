import { Sports } from './entities/sports.entity';
import { SportsService } from './sports.service';
import { CreateSportsDto } from '@lib/dtos/sports/createSports';
import { UpdateSportsDto } from '@lib/dtos/sports/updateSport';
export declare class SportsController {
    private sportsService;
    constructor(sportsService: SportsService);
    createSports(body: CreateSportsDto): Promise<Sports>;
    getSports(): Promise<Sports[]>;
    getSportById(id: string): Promise<Sports>;
    updateSportById(id: string, body: UpdateSportsDto): Promise<Sports>;
}
