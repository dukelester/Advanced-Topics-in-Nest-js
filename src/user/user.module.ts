import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { BookmarkModule } from 'src/bookmark/bookmark.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports:[AuthModule, BookmarkModule],
    controllers:[UserController],
    providers:[UserService],
    exports:[]
})
export class UserModule {}
