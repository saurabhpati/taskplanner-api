import { CreateTaskDto } from '../../task/dtos/create.task.dto';

export class CreateStatusDto {
    constructor() {
        this.tasks = [];
    }

    id: number;
    name: number;
    tasks: CreateTaskDto[];
}