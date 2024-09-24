import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): any[] {
    return ['user one', 'user two'];
  }
}
