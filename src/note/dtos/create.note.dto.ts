import { CreateTaskDto } from '../../task/dtos/create.task.dto';

export class CreateNoteDto {
    id: number;
    title: string;
    description: string;
    task: CreateTaskDto;
}