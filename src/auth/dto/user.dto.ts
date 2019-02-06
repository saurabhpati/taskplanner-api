import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {

    @ApiModelProperty({ required: true })
    username: string;

    @ApiModelProperty({ required: true })
    password: string;
}