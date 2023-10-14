// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { UserDTO } from './dto/user-registration.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(userDto: UserDTO): Promise<User> {
    try {
      const newUser = new this.userModel(userDto);
      return await newUser.save();
    } catch (error) {
      throw new Error("Failed to create a user: " + error.message);
    }
  }

  async GetUser() {
    try {
      const users = await this.userModel.find().exec();
      return users;
    } catch (error) {
      throw new Error("Failed to retrieve users: " + error.message);
    }
  }
}
