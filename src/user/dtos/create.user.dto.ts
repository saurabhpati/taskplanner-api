import { CreateTeamDto } from '../../team/dtos/create.team.dto';

export class CreateUserDto {
    constructor() {
        this.teams = [];
    }

    firstName: string;
    lastName: string;
    password: string;
    username: string;
    email: string;
    teams: CreateTeamDto[]
}