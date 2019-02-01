import { TeamService } from './team.service';
import { Get, Controller, Query } from '@nestjs/common';
import { Team } from './team.entity';

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
}