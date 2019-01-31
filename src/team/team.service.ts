import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Team } from "./team.entity";

@Injectable()
export class TeamService {
    constructor(private readonly repository: Repository<Team>) {

    }

    getById(id: number): Promise<Team> {
        return this.repository.findOne(id);
    }

    getByName(name: string): Promise<Team[]> {
        return this.repository.find({ where: { Name: name } });
    }

    getAll(): Promise<Team[]> {
        return this.repository.find();
    }
}