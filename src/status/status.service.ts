import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Status } from './status.entity';
import { CreateStatusDto } from './dtos/create.status.dto';
import { UpdateStatusDto } from './dtos/update.status.dto';

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

    create(createDto: CreateStatusDto): Promise<Status> {
        return this.repository.save(createDto);
    }

    update(updateDto: UpdateStatusDto): Promise<UpdateResult> {
        return this.repository.update(updateDto.id, updateDto);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
    }
}