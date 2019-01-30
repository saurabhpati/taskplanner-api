import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserDto } from './dto/user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService) {

    }

    private async createToken(user: JwtPayload) {
        const accessToken = this.jwtService.sign(user);
        return {
            expiresIn: 3600,
            accessToken,
        };
    }

    async validateUser(userDto: UserDto): Promise<any> {
        const isValid = !!(await this.userService.get(userDto.username));
        
        return isValid ? this.createToken(userDto) : new Promise((resolve, reject) => {
            resolve({
                expiresIn: null,
                accessToken: null
            });
        });
    }
}