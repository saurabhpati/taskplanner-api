import { Controller, Get, Query, Body, Post, Put, Delete } from '@nestjs/common';
import { StatusService } from './status.service';
import { Status } from './status.entity';
import { CreateStatusDto } from './dtos/create.status.dto';
import { UpdateStatusDto } from './dtos/update.status.dto';

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

    @Post()
    create(@Body() createDto: CreateStatusDto) {
        return this.service.create(createDto);
    }

    @Put()
    update(updateDto: UpdateStatusDto) {
        return this.service.update(updateDto);
    }

    @Delete()
    delete(id: number) {
        return this.service.delete(id);
    }
}