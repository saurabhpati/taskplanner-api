import { CreateUserDto } from '../../user/dtos/create.user.dto';
import { CreateStatusDto } from '../../status/dtos/create.status.dto';
import { CreateNoteDto } from '../../note/dtos/create.note.dto';

export class CreateTaskDto {
    constructor() {
        this.notes = [];
    }

    name: string;
    description: string;
    status: CreateStatusDto;
    user: CreateUserDto;
    notes: CreateNoteDto[];
}