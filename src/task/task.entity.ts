import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Status } from '../status/status.entity';
import { User } from '../user/user.entity';
import { Note } from '../note/note.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 128 })
    name: string;

    @Column()
    description: string;

    @ManyToOne(type => Status, status => status.tasks)
    status: Status;

    @ManyToOne(type => User, user => user.tasks, { cascade: true })
    user: User;

    @OneToMany(type => Note, note => note.task)
    notes: Note[];
}