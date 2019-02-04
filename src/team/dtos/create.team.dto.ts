import { CreateUserDto } from '../../user/dtos/create.user.dto';

export class CreateTeamDto {
    constructor() {
        this.users = [];
    }

    id: number;
    name: string;
    description: string;
    users: CreateUserDto[];
}