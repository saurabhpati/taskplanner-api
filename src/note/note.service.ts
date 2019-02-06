import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDto } from './dtos/create.note.dto';
import { UpdateNoteDto } from './dtos/update.note.dto';

@Injectable()
export class NoteService {
    constructor(private readonly repository: Repository<Note>) {

    }

    async get(id: number): Promise<Note> {
        return this.repository.findOne(id);
    }

    async getAll(): Promise<Note[]> {
        return this.repository.find();
    }

    async create(createDto: CreateNoteDto): Promise<CreateNoteDto> {
        return this.repository.save(createDto);
    }

    async update(updateDto: UpdateNoteDto): Promise<UpdateResult> {
        return this.repository.update(updateDto.id, updateDto);
    }

    async delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
    }
}