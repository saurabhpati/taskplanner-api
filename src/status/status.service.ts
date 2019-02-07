import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Status } from './status.entity';
import { CreateStatusDto } from './dtos/create.status.dto';
import { UpdateStatusDto } from './dtos/update.status.dto';

@Injectable()
export class StatusService {
    constructor(@InjectRepository(Status) private readonly repository: Repository<Status>) {

    }

    async getById(id: number): Promise<Status> {
        return this.repository.findOne(id);
    }

    async getByName(name: string): Promise<Status[]> {
        return this.repository.find({ where: { Name: name } });
    }

    async getAll(): Promise<Status[]> {
        return this.repository.find();
    }

    async create(createDto: CreateStatusDto): Promise<Status> {
        return this.repository.save(createDto);
    }

    async update(updateDto: UpdateStatusDto): Promise<UpdateResult> {
        return this.repository.update(updateDto.id, updateDto);
    }

    async delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
    }
}