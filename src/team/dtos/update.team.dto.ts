import { UpdateUserDto } from '../../user/dtos/update.user.dto';

export class UpdateTeamDto {
    constructor() {
        this.users = [];
    }

    id: number;
    name: string;
    description: string;
    users: UpdateUserDto[];
}