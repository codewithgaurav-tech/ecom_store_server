import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
require('dotenv').config();
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(`${process.env.DATABASE_URL}`, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
