import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ length: 64 })
    Name: number;
}