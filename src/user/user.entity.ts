import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Task } from '../task/task.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({length: 128})
    FirstName: string;

    @Column({length: 128})
    LastName: string;

    @Column({length: 128})
    Email: string;

    @Column({length: 64})
    Username: string;

    @Column({length: 64})
    Password: string;

    @OneToMany(type => Task, task => task.Users)
    Task: Task;
}