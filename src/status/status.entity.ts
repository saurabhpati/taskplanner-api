import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Task } from '../task/task.entity';

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ length: 64 })
    Name: number;

    @OneToOne(type => Task, task => task.Status)
    Task: Task;
}