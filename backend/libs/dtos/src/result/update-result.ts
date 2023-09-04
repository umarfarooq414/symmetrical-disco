import { TeamRegistrationStatus } from '@lib/types/db/entities/team';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateResultDto {
  @ApiProperty({ type: 'number', required: true })
  @IsNumber()
  @IsNotEmpty()
  matchNo: number;

  @ApiProperty({ type: 'string', required: true })
  @IsString()
  @IsNotEmpty()
  teamA: string;

  @ApiProperty({ type: 'string', required: true })
  @IsString()
  @IsNotEmpty()
  teamB: string;

  @ApiProperty({ type: 'number', required: true })
  // @IsNumber()
  @IsNotEmpty()
  pointsA: number | any;

  @ApiProperty({ type: 'number', required: true })
  // @IsNumber()
  @IsNotEmpty()
  pointsB: number | any;
}
