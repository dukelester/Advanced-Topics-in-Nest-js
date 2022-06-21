import { Controller, Get, Scope } from '@nestjs/common';
import { BookmarkService } from '../bookmark/bookmark.service';

// @Controller('users', {scope:Scope.DEFAULT})
@Controller({path:'users', scope:Scope.REQUEST})
export class UserController {
    constructor ( private readonly bookmark: BookmarkService){}
    
    @Get()
    getAll() {
        return this.bookmark.getAllBookmarks();
    }

}
