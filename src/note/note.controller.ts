import { Get, Controller, Query } from "@nestjs/common";
import { NoteService } from "./note.service";
import { Note } from "./note.entity";

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
}