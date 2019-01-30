import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create.user.dto';

@Controller('User')
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Post()
    async register(@Body()userDto: CreateUserDto) {
        return this.userService.register(userDto);
    }

    @Get()
    async getAll() {
        return this.userService.getAll();
    }
}