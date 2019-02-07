import { CreateTeamDto } from '../../team/dtos/create.team.dto';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
    constructor() {
        this.teams = [];
    }

    @ApiModelProperty({required: true})
    firstName: string;

    @ApiModelPropertyOptional()
    lastName: string;

    @ApiModelProperty({required: true})
    password: string;

    @ApiModelProperty({required: true})
    username: string;

    @ApiModelProperty({required: true})
    email: string;

    @ApiModelProperty({required: true})
    teams: CreateTeamDto[]
}