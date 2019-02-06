import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { CreateTaskDto } from '../../task/dtos/create.task.dto';

export class CreateStatusDto {
    constructor() {
        this.tasks = [];
    }

    @ApiModelProperty({ required: true })
    name: number;

    @ApiModelPropertyOptional()
    tasks: CreateTaskDto[];
}