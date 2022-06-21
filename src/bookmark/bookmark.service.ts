import { Injectable } from '@nestjs/common';
import { Bookmark, bookmark } from './bookmarks.schema';
import { mybookmarks } from './bookmarksdata';
import { BookmarkDto } from './bookmark.dto';
@Injectable()
export class BookmarkService {
    private readonly bookmrks = mybookmarks;
    getAllBookmarks(){
        console.log('Get all the book marks')
        return this.bookmrks
    }
    getBookMarkById(bookMarkId:number){
        console.log('Get a specific book mark')
        return this.bookmrks.find(bookmark => bookmark.id === bookMarkId)
    }

    createBookMark(bookmarkdto:BookmarkDto){
        console.log('Create a bookmark with')
        let myCreatedBook = this.bookmrks.push(bookmarkdto)
        console.log('Bookmark created',myCreatedBook)

        return myCreatedBook
    }

}
