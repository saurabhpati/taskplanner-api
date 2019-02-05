import { PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToMany } from 'typeorm';
import { Task } from '../task/task.entity';
import { Team } from '../team/team.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 128 })
    firstName: string;

    @Column({ length: 128 })
    lastName: string;

    @Column({ length: 128 })
    email: string;

    @Column({ length: 64 })
    username: string;

    @Column({ length: 64 })
    password: string;

    @OneToMany(type => Task, task => task.user)
    tasks: Task[];

    @ManyToMany(type => Team, team => team.users)
    teams: Team[];
}