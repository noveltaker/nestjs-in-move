import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getUsers(): Promise<User[]> {
    const data = this.userService.findByAll();
    return Object.assign({
      status: 200,
      message: '유저 전체 조회',
      data: data,
    });
  }
}
