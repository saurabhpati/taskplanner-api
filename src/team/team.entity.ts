import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64 })
    name: string;

    @Column({ length: 256, default: "" })
    description: string;

    @ManyToMany(type => User, user => user.teams)
    @JoinTable({ name: 'UserTeam' })
    users: User[];
}