import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmarks.schema';
import { mybookmarks } from './bookmarksdata';
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

}
