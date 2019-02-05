import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { CreateTeamDto } from './dtos/create.team.dto';

@Injectable()
export class TeamService {
    constructor(private readonly repository: Repository<Team>) {

    }

    getById(id: number): Promise<Team> {
        return this.repository.findOne(id);
    }

    getByName(name: string): Promise<Team[]> {
        return this.repository.find({ where: { Name: name } });
    }

    getAll(): Promise<Team[]> {
        return this.repository.find();
    }

    create(createDto: CreateTeamDto): Promise<CreateTeamDto> {
        return this.repository.save(createDto);
    }
}