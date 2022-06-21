import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from './configs/configs.module';
import { connect } from 'http2';
import { ConfigModule as nestConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/bookmarks',
  {
    connectionName: 'bookmarks',
  }),
   //url for mongo db
   MongooseModule.forRoot('mongodb://localhost/test',{
    connectionName: 'test'
   }),

   //config module using the static function forRoot()
   nestConfigModule.forRoot({
    envFilePath:'.developement.env'  //custom location for the env file

   }),
   nestConfigModule.forRoot({
      envFilePath: ['.development.env',''] //for multiple env
   }),

   
  ConfigModule.register({folder: './configs'}),
  AuthModule, UserModule, BookmarkModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
