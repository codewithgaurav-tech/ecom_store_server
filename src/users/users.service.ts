// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { UserDTO } from './dto/user-registration.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async createUser(userDto: UserDTO): Promise<User> {
        const newUser = new this.userModel(userDto);
        return newUser.save();
    }
}
