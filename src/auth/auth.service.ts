import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  // tao 1 repostories de tuong tac voi table user trong database
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  // Trong constructor, @InjectRepository(User) được sử dụng để inject repository tương ứng với bảng user trong cơ sở dữ liệu.
  // private userRepository: Repository<User>: Biến userRepository sẽ chứa một instance của Repository liên kết với bảng User trong cơ sở dữ liệu. Thông qua biến này, bạn có thể gọi các phương thức có sẵn của TypeORM để thực hiện các thao tác với bảng User.
  
  // tao service register lam viec voi database
  async register(registerUserDto: RegisterUserDto) {
    const hashPassword = await this.hashPassword(registerUserDto.password);
    return await this.userRepository.save({...registerUserDto, refresh_token: "refresh_token_string", password: hashPassword});
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}
