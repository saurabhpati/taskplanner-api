import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Task } from '../task/task.entity';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ length: 128 })
    Title: string;

    @Column()
    Description: string;

    @ManyToOne(type => Task, task => task.Notes)
    Task: Task;
}