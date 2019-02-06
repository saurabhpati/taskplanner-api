import { UpdateTaskDto } from '../../task/dtos/update.task.dto';
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateNoteDto {

    @ApiModelProperty({ required: true })
    id: number;

    @ApiModelProperty({ required: true })
    title: string;

    @ApiModelProperty({ required: true })
    description: string;

    @ApiModelProperty({ required: true })
    task: UpdateTaskDto;
}