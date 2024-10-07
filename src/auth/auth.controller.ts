import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthService } from './auth.service';
import { User } from 'src/user/entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('register')
    register(@Body() registerUserDto: RegisterUserDto): Promise<RegisterUserDto & User> {
        console.log('api register');
        console.log(registerUserDto);
        return this.authService.register(registerUserDto);
    }

}
