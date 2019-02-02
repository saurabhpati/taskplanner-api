import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Status } from '../status/status.entity';
import { User } from '../user/user.entity';
import { Note } from '../notes/notes.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    Id: string;

    @Column({ length: 128 })
    Name: string;

    @Column()
    Description: string;

    @OneToOne(type => Status, status => status.Task)
    @JoinColumn()
    Status: Status;

    @ManyToOne(type => User, user => user.Tasks)
    User: User;

    @OneToMany(type => Note, note => note.Task)
    Notes: Note[];
}