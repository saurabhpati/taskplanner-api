import { UpdateTeamDto } from '../../team/dtos/update.team.dto';

export class UpdateUserDto {
    constructor() {
        this.teams = [];
    }

    id: number;
    firstName: string;
    lastName: string;
    password: string;
    username: string;
    email: string;
    teams: UpdateTeamDto[]
}