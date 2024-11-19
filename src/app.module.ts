import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [DatabaseModule, UsersModule, PostsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
