import { Controller, Get, Query } from '@nestjs/common';
import { StatusService } from './status.service';
import { Status } from './status.entity';

@Controller('Status')
export class StatusController {
    constructor(private readonly service: StatusService) {

    }

    @Get()
    get(@Query() id: number): Promise<Status> {
        return this.service.getById(id);
    }

    @Get()
    getAll(): Promise<Status[]> {
        return this.service.getAll();
    }
}