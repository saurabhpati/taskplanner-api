import { Injectable, Query } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create.user.dto';
import * as bcrypt from 'bcrypt-nodejs';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {

    }

    async register(userDto: CreateUserDto): Promise<User> {
        return new Promise((resolve, reject) => {
            try {
                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(userDto.password, salt, null, (error, hash) => {
                        return resolve(this.userRepository.save({
                            FirstName: userDto.username,
                            LastName: userDto.lastName,
                            Username: userDto.username,
                            Password: hash,
                            Email: userDto.email
                        }));
                    });
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    async get(username: string): Promise<User> {
        return this.userRepository.findOne({ Username: username })
    }

    async getAll(): Promise<User[]> {
        return this.userRepository.find();
    }
}