import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatchFixture } from '../fixtures/entites/fixture-entity';
import { Result } from './entites/results.entity';
import { UpdateResultDto } from '@lib/dtos';
import { Teams } from '../team-registration/entities/team-entity';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Result)
    private resultRepository: Repository<Result>,
    @InjectRepository(Teams)
    private registrationRepo: Repository<Teams>,
    @InjectRepository(MatchFixture)
    private fixtureRepository: Repository<MatchFixture>
  ) {}

  async setResult(body: UpdateResultDto): Promise<Result> {
    try {
      const { matchNo, teamA, teamB, pointsA, pointsB } = body;
      const foundFixture = await this.fixtureRepository.findOne({
        where: { matchNo },
        relations: ['sport'],
      });
      if (!foundFixture)
        throw new HttpException(
          'Fixture/Match not found!',
          HttpStatus.NOT_FOUND
        );
      if (foundFixture.result)
        throw new HttpException(
          'Result already added for this match',
          HttpStatus.CONFLICT
        );
      const winnerTeams = await this.registrationRepo.findOneBy({
        teamName: teamA,
      });
      const loserTeams = await this.registrationRepo.findOneBy({
        teamName: teamB,
      });

      if (!teamA || !teamB)
        throw new HttpException(
          'Record for teams not found',
          HttpStatus.NOT_FOUND
        );
      const result = new Result();
      result.fixture = foundFixture;
      result.sport = foundFixture.sport;
      result.winnerTeam = winnerTeams;
      result.loserTeam = loserTeams;
      result.winnerPoints = pointsA;
      result.loserPoints = pointsB;
      return await this.resultRepository.save(result);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async getFixtures(): Promise<MatchFixture[]> {
    return this.fixtureRepository.find({ relations: ['result'] });
  }

  async getResults(): Promise<Result[]> {
    return this.resultRepository.find({
      relations: ['fixture'],
    });
  }
}
