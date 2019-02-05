import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dtos/update.task.dto';
import { CreateTaskDto } from './dtos/create.task.dto';

@Injectable()
export class TaskService {
    constructor(private readonly repository: Repository<Task>) {

    }

    getAll(userId: number): Promise<Task[]> {
        return this.repository
            .createQueryBuilder('Task')
            .innerJoinAndSelect('Task.Users', 'Users')
            .where(`Users.Id = ${userId}`)
            .getMany();
    }

    get(taskId: number): Promise<Task> {
        return this.repository.findOne(taskId);
    }

    create(createDto: CreateTaskDto): Promise<CreateTaskDto> {
        return this.repository.save(createDto);
    }

    update(updateDto: UpdateTaskDto): Promise<UpdateResult> {
        return this.repository.update(updateDto.id, updateDto);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
    }
}