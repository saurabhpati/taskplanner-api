import { Injectable, Query } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create.user.dto';
import * as bcrypt from 'bcrypt-nodejs';
import { UpdateUserDto } from './dtos/update.user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {

    }

    async create(userDto: CreateUserDto): Promise<User> {
        return new Promise((resolve, reject) => {
            try {
                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(userDto.password, salt, null, (error, hash) => {
                        userDto.password = hash;
                        return resolve(this.userRepository.save(userDto));
                    });
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    async get(username: string): Promise<User> {
        return this.userRepository.findOne({ username })
    }

    async getAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async update(updateDto: UpdateUserDto): Promise<UpdateResult> {
        return this.userRepository.update(updateDto.id, updateDto);
    }

    async delete(id: number): Promise<DeleteResult> {
        return this.userRepository.delete(id);
    }
}