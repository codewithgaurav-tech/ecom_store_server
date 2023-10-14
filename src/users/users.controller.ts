// src/users/users.controller.ts
import { Controller, Post, Body,Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/user-registration.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async registerUser(@Body() userDto: UserDTO) {
    const newUser = await this.usersService.createUser(userDto);
    return newUser;
  }
  @Get()
  async GetUser() {
    return this.usersService.GetUser();
  }
}
