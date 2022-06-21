import { Body, Controller,  Get, Param, Post} from '@nestjs/common';
import { BookmarkDto } from './bookmark.dto';
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
    getBookMarkById(@Param('bookMarkId') bookMarkId: number):BookmarkDto{
        console.log(bookMarkId)
        return this.bookMarkService.getBookMarkById(bookMarkId)
    }

    @Post()
    async createBookMark(@Body() createBookmark: BookmarkDto )  {
         return  await this.bookMarkService.createBookMark(createBookmark)

    }

}
