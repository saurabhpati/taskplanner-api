import { UserDto } from './dto/user.dto';
import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {

    }

    @Post('login')
    async signIn(@Body() userDto: UserDto) {
        return this.authService.validateUser(userDto);
    }
}