import { Controller, Get, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {

    }

    @Get()
    get(@Query() taskId: number): Promise<Task> {
        return this.taskService.get(taskId);
    }

    getUserTasks(@Query() userId: number): Promise<Task[]> {
        return this.taskService.getAll(userId);
    }
}