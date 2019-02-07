import { CreateUserDto } from '../../user/dtos/create.user.dto';
import { CreateStatusDto } from '../../status/dtos/create.status.dto';
import { CreateNoteDto } from '../../note/dtos/create.note.dto';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateTaskDto {
    constructor() {
        this.notes = [];
    }

    @ApiModelProperty({ required: true })
    name: string;

    @ApiModelPropertyOptional()
    description: string;

    @ApiModelProperty({ required: true })
    status: CreateStatusDto;

    @ApiModelPropertyOptional()
    user: CreateUserDto;

    @ApiModelPropertyOptional()
    notes: CreateNoteDto[];
}