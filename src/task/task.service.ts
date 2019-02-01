import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

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
}