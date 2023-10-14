import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
// import { UserModel, UserSchema } from './user.model';
// import { UserModel } from './user.model'
import { MongooseModule } from '@nestjs/mongoose';
// import { UserSchema } from './user.model';
import { UserModel, UserSchema } from './user.model';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    controllers: [UsersController],// Register the UsersController
    providers: [UsersService],
    exports: [UsersService, MongooseModule]
})
export class UsersModule {
}
