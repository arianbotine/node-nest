import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';

global.users = [
  { name: 'user one', email: 'userone@email.com' },
  { name: 'user two', email: 'usertwo@email.com' },
];

@Injectable()
export class UsersService {
  findAll(): any[] {
    return global.users;
  }

  create(user: CreateUserDto) {
    global.users.push(user);
  }
}
