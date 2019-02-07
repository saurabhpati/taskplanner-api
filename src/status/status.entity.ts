import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from '../task/task.entity';

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64 })
    name: string;

    @OneToMany(type => Task, task => task.status)
    tasks: Task[];
}