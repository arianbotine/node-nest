import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('list')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('create')
  create(@Body() user: CreateUserDto) {
    if (!user.name || !user.email) {
      throw new BadRequestException('nome ou e-mail vazios');
    }
    return this.usersService.create(user);
  }
}
