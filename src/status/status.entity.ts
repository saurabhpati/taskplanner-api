import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { Task } from '../task/task.entity';

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ length: 64 })
    Name: number;

    @OneToMany(type => Task, task => task.Status)
    Tasks: Task[];
}