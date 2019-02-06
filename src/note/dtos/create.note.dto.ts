import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { CreateTaskDto } from '../../task/dtos/create.task.dto';

export class CreateNoteDto {

    @ApiModelProperty({ required: true })
    title: string;

    @ApiModelPropertyOptional()
    description: string;

    @ApiModelPropertyOptional()
    task: CreateTaskDto;
}