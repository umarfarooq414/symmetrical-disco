/// <reference types="multer" />
import { RegistrationService } from './registration.service';
import { CreateTeamDto } from '@lib/dtos/team/create-team-dto';
import { TeamRegistrationStatus } from '@lib/types/db/entities/team';
import { GlobalResponseDto } from '@lib/dtos/common';
import { UpdateRegistrationStatusDto } from '@lib/dtos';
import { Teams } from './entities/team-entity';
export declare class RegistrationController {
    private registrationService;
    constructor(registrationService: RegistrationService);
    getTeamStatus(id: string): Promise<TeamRegistrationStatus>;
    submitTeam(createTeamDto: CreateTeamDto, paymentImage: Express.Multer.File): Promise<GlobalResponseDto>;
    updateStatus(updateTeamStatusDto: UpdateRegistrationStatusDto): Promise<GlobalResponseDto>;
    getTeams(): Promise<Teams[]>;
}
