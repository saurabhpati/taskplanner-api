import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Task } from '../task/task.entity';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 128 })
    title: string;

    @Column()
    description: string;

    @ManyToOne(type => Task, task => task.notes)
    task: Task;
}