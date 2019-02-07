import { UpdateStatusDto } from '../../status/dtos/update.status.dto';
import { UpdateNoteDto } from '../../note/dtos/update.note.dto';
import { UpdateUserDto } from '../../user/dtos/update.user.dto';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto {
    constructor() {
        this.notes = [];
    }

    @ApiModelProperty({ required: true })
    id: string;

    @ApiModelPropertyOptional()
    name: string;

    @ApiModelPropertyOptional()
    description: string;

    @ApiModelPropertyOptional()
    status: UpdateStatusDto;

    @ApiModelPropertyOptional()
    user: UpdateUserDto;

    @ApiModelPropertyOptional()
    notes: UpdateNoteDto[];
}