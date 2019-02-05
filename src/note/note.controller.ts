import { Get, Controller, Query, Post, Body, Put, Delete } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { NoteService } from './note.service';
import { Note } from './note.entity';
import { CreateNoteDto } from './dtos/create.note.dto';
import { UpdateNoteDto } from './dtos/update.note.dto';

@Controller('note')
export class NoteController {
    constructor(private readonly service: NoteService) {

    }

    @Get()
    get(@Query() id: number): Promise<Note> {
        return this.service.get(id);
    }

    @Get()
    getAll(): Promise<Note[]> {
        return this.service.getAll();
    }

    @Post()
    create(@Body() createDto: CreateNoteDto): Promise<CreateNoteDto> {
        return this.service.create(createDto);
    }

    @Put()
    update(@Body() updateDto: UpdateNoteDto): Promise<UpdateResult> {
        return this.service.update(updateDto);
    }

    @Delete()
    delete(@Query() id: number): Promise<DeleteResult> {
        return this.service.delete(id);
    }
}