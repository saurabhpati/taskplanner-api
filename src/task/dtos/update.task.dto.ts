import { UpdateStatusDto } from '../../status/dtos/update.status.dto';
import { UpdateNoteDto } from '../../note/dtos/update.note.dto';
import { UpdateUserDto } from '../../user/dtos/update.user.dto';

export class UpdateTaskDto {
    constructor() {
        this.notes = [];
    }

    id: string;
    name: string;
    description: string;
    status: UpdateStatusDto;
    user: UpdateUserDto;
    notes: UpdateNoteDto[];
}