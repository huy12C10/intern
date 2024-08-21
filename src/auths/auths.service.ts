import { comparePasswordHelper } from '@/hashPassword/utils';
import { UsersService } from '@/users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordAuthDto, CodeAuthDto, CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(username);
    const isValidPassword = user && await comparePasswordHelper(pass, user.password);
    if (!user || !isValidPassword) return null;
    return user;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user._id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  handleRegister(registerDto: CreateAuthDto) {
    return this.usersService.handleRegister(registerDto);
  }

  checkCode(data: CodeAuthDto) {
    return this.usersService.handleActive(data);
  }

  retryActive(data: string) {
    return this.usersService.retryActive(data);
  }

  retryPassword(data: string) {
    return this.usersService.retryPassword(data);
  }

  changePassword(data: ChangePasswordAuthDto) {
    return this.usersService.changePassword(data);
  }
}