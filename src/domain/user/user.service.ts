import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: Repository<User>,
  ) {}

  async findByAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
