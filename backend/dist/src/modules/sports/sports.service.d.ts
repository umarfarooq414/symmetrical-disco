import { CreateSportsDto } from '@lib/dtos';
import { Sports } from './entities/sports.entity';
import { UpdateSportsDto } from '@lib/dtos/sports/updateSport';
export declare class SportsService {
    private readonly sportsRepo;
    createSports(createSports: CreateSportsDto): Promise<Sports>;
    getSports(): Promise<Sports[]>;
    getSportById(id: string): Promise<Sports>;
    updateSportById(id: string, body: UpdateSportsDto): Promise<Sports>;
}
