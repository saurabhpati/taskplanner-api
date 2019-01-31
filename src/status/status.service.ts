import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Status } from './status.entity';

@Injectable()
export class StatusService {
    constructor(private readonly repository: Repository<Status>) {

    }

    getById(id: number): Promise<Status> {
        return this.repository.findOne(id);
    }

    getByName(name: string): Promise<Status[]> {
        return this.repository.find({ where: { Name: name } });
    }

    getAll(): Promise<Status[]> {
        return this.repository.find();
    }
}