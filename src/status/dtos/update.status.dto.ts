import { UpdateTaskDto } from '../../task/dtos/update.task.dto';

export class UpdateStatusDto {
    constructor() {
        this.tasks = [];
    }

    id: number;
    name: number;
    tasks: UpdateTaskDto[];
}