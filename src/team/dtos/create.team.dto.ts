import { CreateUserDto } from '../../user/dtos/create.user.dto';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateTeamDto {
    constructor() {
        this.users = [];
    }

    @ApiModelProperty({required: true})
    name: string;

    @ApiModelPropertyOptional()
    description: string;

    @ApiModelPropertyOptional()
    users: CreateUserDto[];
}