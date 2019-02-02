import { PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToMany } from 'typeorm';
import { Task } from '../task/task.entity';
import { Team } from '../team/team.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ length: 128 })
    FirstName: string;

    @Column({ length: 128 })
    LastName: string;

    @Column({ length: 128 })
    Email: string;

    @Column({ length: 64 })
    Username: string;

    @Column({ length: 64 })
    Password: string;

    @OneToMany(type => Task, task => task.User)
    Tasks: Task[];

    @ManyToMany(type => Team, team => team.Users)
    Teams: Team[];
}