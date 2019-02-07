import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Team } from './team.entity';
import { CreateTeamDto } from './dtos/create.team.dto';
import { UpdateTeamDto } from './dtos/update.team.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TeamService {
    constructor(@InjectRepository(Team) private readonly repository: Repository<Team>) {

    }

    async getById(id: number): Promise<Team> {
        return this.repository.findOne(id);
    }

    async getByName(name: string): Promise<Team[]> {
        return this.repository.find({ where: { Name: name } });
    }

    async getAll(): Promise<Team[]> {
        return this.repository.find();
    }

    async create(createDto: CreateTeamDto): Promise<CreateTeamDto> {
        return this.repository.save(createDto);
    }

    async update(updateDto: UpdateTeamDto): Promise<UpdateResult> {
        return this.repository.update(updateDto.id, updateDto);
    }

    async delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
    }
}