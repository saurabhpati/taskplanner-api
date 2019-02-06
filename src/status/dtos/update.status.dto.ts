import { UpdateTaskDto } from '../../task/dtos/update.task.dto';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateStatusDto {
    constructor() {
        this.tasks = [];
    }

    @ApiModelProperty({required: true})
    id: number;

    @ApiModelProperty({required: true})
    name: number;

    @ApiModelPropertyOptional()
    tasks: UpdateTaskDto[];
}