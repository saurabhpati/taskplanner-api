import { UpdateTeamDto } from '../../team/dtos/update.team.dto';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
    constructor() {
        this.teams = [];
    }

    @ApiModelProperty({required: true})
    id: number;

    @ApiModelPropertyOptional()
    firstName: string;

    @ApiModelPropertyOptional()
    lastName: string;

    @ApiModelPropertyOptional()
    password: string;

    @ApiModelPropertyOptional()
    username: string;

    @ApiModelPropertyOptional()
    email: string;

    @ApiModelPropertyOptional()
    teams: UpdateTeamDto[]
}