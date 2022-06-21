import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required:false})
    firstName?: string;
    @Prop({required:false})
    lastName?: string;

    @Prop({required:false})
    phoneNumber?: string;

    @Prop()
    email: string;
    @Prop()
    password: string;

    @Prop()
    createdAt: Date;
    @Prop()
    updatedAt: Date;
    

 
}
export const authSchema = SchemaFactory.createForClass(User);