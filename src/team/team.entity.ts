import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ length: 64 })
    Name: string;

    @Column({ length: 256 })
    Description: string;

    @ManyToMany(type => User, user => user.Teams)
    @JoinTable({ name: 'UserTeam' })
    Users: User[];
}