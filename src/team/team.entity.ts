import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ length: 64 })
    Name: string;

    @Column({ length: 256 })
    Description: string;
}