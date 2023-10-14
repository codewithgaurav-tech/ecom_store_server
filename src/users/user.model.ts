// src/users/user.model.ts
import { Document, Schema, model } from 'mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersModule } from './users.module';

export interface User extends Document {
    firstName: string;
    lastName: string;
    country: string;
    language: string;
    birthDate: Date | null;
    PhoneNo: number;
    userName: string
    email: string
    password: string;
}

export const UserSchema = new Schema<User>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    country: { type: String, required: false },
    language: { type: String, required: true },
    birthDate: { type: Date, default: null }, // Default to null if not provided
    PhoneNo: { type: Number, required: true },
    userName: { type: String, required: true, unique: true }, // Unique username
    email: { type: String, required: true, unique: true }, // Unique email
    password: { type: String, required: true },
});
export const UserModel = model<User>('User', UserSchema);
// export const UserSchemaDefinition = UserSchema;
