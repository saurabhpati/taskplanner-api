import { TeamService } from './team.service';
import { Get, Controller, Query, Post, Body, Put, Delete } from '@nestjs/common';
import { Team } from './team.entity';
import { CreateTeamDto } from './dtos/create.team.dto';
import { UpdateTeamDto } from './dtos/update.team.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('team')
export class TeamController {
    constructor(private readonly service: TeamService) {

    }

    @Get()
    getById(@Query() id: number): Promise<Team> {
        return this.service.getById(id);
    }

    @Get()
    getByName(@Query() name: string): Promise<Team[]> {
        return this.service.getByName(name);
    }

    @Post()
    create(@Body() createDto: CreateTeamDto) {
        return this.service.create(createDto);
    }

    @Put()
    update(@Body() updateDto: UpdateTeamDto): Promise<UpdateResult> {
        return this.service.update(updateDto);
    }

    @Delete()
    delete(id: number): Promise<DeleteResult> {
        return this.service.delete(id);
    }
}