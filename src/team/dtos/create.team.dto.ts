import { CreateUserDto } from '../../user/dtos/create.user.dto';

export class CreateTeamDto {
    constructor() {
        this.users = [];
    }

    name: string;
    description: string;
    users: CreateUserDto[];
}