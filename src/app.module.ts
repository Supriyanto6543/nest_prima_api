import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';
import { CommentModule } from './comment/comment.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, TasksModule, CommentModule],
})
export class AppModule {}
