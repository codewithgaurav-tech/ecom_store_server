// src/users/users.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/user-registration.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async registerUser(@Body() userDto: UserDTO) {
    try {
      const newUser = await this.usersService.createUser(userDto);
      return newUser;
    } catch (error) {
      // Handle the error and send it in the API response
      return { error: error.message };
    }
  }

  @Get()
  async GetUser() {
    try {
      const users = await this.usersService.GetUser();
      return users;
    } catch (error) {
      // Handle the error and send it in the API response
      return { error: error.message };
    }
  }
}
