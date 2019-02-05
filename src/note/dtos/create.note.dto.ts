import { CreateTaskDto } from '../../task/dtos/create.task.dto';

export class CreateNoteDto {
    title: string;
    description: string;
    task: CreateTaskDto;
}