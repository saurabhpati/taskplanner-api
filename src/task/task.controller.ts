import { Controller, Get, Query, Body, Post, Put, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dtos/update.task.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateTaskDto } from './dtos/create.task.dto';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {

    }

    @Get()
    get(@Query() taskId: number): Promise<Task> {
        return this.taskService.get(taskId);
    }

    @Get('user')
    getUserTasks(@Query() userId: number): Promise<Task[]> {
        return this.taskService.getAll(userId);
    }

    @Post()
    create(@Body() createDto: CreateTaskDto): Promise<CreateTaskDto> {
        return this.taskService.create(createDto);
    }

    @Put()
    update(@Body() updateDto: UpdateTaskDto): Promise<UpdateResult> {
        return this.taskService.update(updateDto);
    }

    @Delete()
    delete(@Query() id: number): Promise<DeleteResult> {
        return this.taskService.delete(id);
    }
}