import { CreateTaskDto } from '../../task/dtos/create.task.dto';

export class CreateStatusDto {
    constructor() {
        this.tasks = [];
    }

    name: number;
    tasks: CreateTaskDto[];
}