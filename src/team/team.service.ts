import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Team } from "./team.entity";
import { CreateTeamDto } from "./dtos/create.team.dto";
import { User } from "src/user/user.entity";

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

    create(createDto: CreateTeamDto): Promise<any> {
        return this.repository.save({
            Name: name,
            Description: createDto.description,
            Users: createDto.users.map(user => ({
                FirstName: user.firstName,
                LastName: user.lastName,
                Username: user.username,
                Email: user.email,
                Password: user.password
            }))
        });
    }
}