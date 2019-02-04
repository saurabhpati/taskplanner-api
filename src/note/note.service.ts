import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDto } from './dtos/create.note.dto';

@Injectable()
export class NoteService {
    constructor(private readonly repository: Repository<Note>) {

    }

    get(id: number): Promise<Note> {
        return this.repository.findOne(id);
    }

    getAll(): Promise<Note[]> {
        return this.repository.find();
    }
}