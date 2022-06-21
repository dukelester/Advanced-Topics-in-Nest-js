import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from '../auth/auth.schema';

export type bookMarkDocument = Bookmark & Document

@Schema()
export class Bookmark {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User; //relationship object

    @Prop({required: true, defaultValue: false})
    title: string;
    @Prop()
    url: string;
    @Prop({required:false})
    description: string;
    @Prop({required:false})
    tags: string[];
    @Prop()
    createdAt: Date;
    @Prop()
    updatedAt: Date;

}

export const bookmark = SchemaFactory.createForClass(Bookmark)


