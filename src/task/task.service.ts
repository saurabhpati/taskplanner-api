import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dtos/update.task.dto';
import { CreateTaskDto } from './dtos/create.task.dto';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(Task) private readonly repository: Repository<Task>) {

    }

    async getAll(userId: number): Promise<Task[]> {
        return this.repository
            .createQueryBuilder('Task')
            .innerJoinAndSelect('Task.Users', 'Users')
            .where(`Users.Id = ${userId}`)
            .getMany();
    }

    async get(taskId: number): Promise<Task> {
        return this.repository.findOne(taskId);
    }

    async create(createDto: CreateTaskDto): Promise<CreateTaskDto> {
        return this.repository.save(createDto);
    }

    async update(updateDto: UpdateTaskDto): Promise<UpdateResult> {
        return this.repository.update(updateDto.id, updateDto);
    }

    async delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
    }
}