import { UpdateUserDto } from '../../user/dtos/update.user.dto';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateTeamDto {
    constructor() {
        this.users = [];
    }

    @ApiModelProperty({required: true})
    id: number;

    @ApiModelPropertyOptional()
    name: string;

    @ApiModelPropertyOptional()
    description: string;

    @ApiModelPropertyOptional()
    users: UpdateUserDto[];
}