import { Module } from "@nestjs/common";
import { AuthController } from './auth.controller';
import { AuthService } from "./auth.service";
import { User, authSchema } from './auth.schema'
import { BookmarkModule } from "src/bookmark/bookmark.module";




@Module({
    imports: [BookmarkModule],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}