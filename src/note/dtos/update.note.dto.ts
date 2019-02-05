import { UpdateTaskDto } from '../../task/dtos/update.task.dto';

export class UpdateNoteDto {
    id: number;
    title: string;
    description: string;
    task: UpdateTaskDto;
}