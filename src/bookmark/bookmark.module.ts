import { Module } from '@nestjs/common';
import { Bookmark } from './bookmarks.schema';
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [Bookmark],
    providers: [BookmarkService],
    controllers: [BookmarkController],
    exports: [BookmarkService, Bookmark],
})
export class BookmarkModule {}

//modules define related files ==> providers, controllers, schemas ==> export and import
//