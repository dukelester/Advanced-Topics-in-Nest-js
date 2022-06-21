import { Controller,  Get, Param} from '@nestjs/common';
import { Bookmark } from './bookmark.dto';
import {BookmarkService} from './bookmark.service'
@Controller('bookmark')
export class BookmarkController {
    constructor(private readonly bookMarkService: BookmarkService) {
        console.log('BookmarkController created');
    }

    @Get()
    getAllBookmarks(){
        return this.bookMarkService.getAllBookmarks()
    }

    @Get("/:bookMarkId")
    getBookMarkById(@Param('bookMarkId') bookMarkId: number):Bookmark{
        console.log(bookMarkId)
        return this.bookMarkService.getBookMarkById(bookMarkId)
    }
}
