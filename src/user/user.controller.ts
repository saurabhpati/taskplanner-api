import { Controller, Post, Get, Body, Query, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create.user.dto';
import { UpdateUserDto } from './dtos/update.user.dto';

@Controller('User')
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Post()
    register(@Body()userDto: CreateUserDto) {
        return this.userService.create(userDto);
    }

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Get()
    get(@Query()username: string) {
        return this.userService.get(username);
    }

    @Put()
    update(@Body()updateDto: UpdateUserDto) {
        return this.userService.update(updateDto);
    }

    @Delete()
    delete(id: number) {
        return this.userService.delete(id);
    }
}