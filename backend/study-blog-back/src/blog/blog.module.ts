import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './entities/blog.entity';
import { ImageService } from './image.service';

@Module({
  imports : [TypeOrmModule.forFeature([BlogEntity])],
  controllers: [BlogController,],
  providers: [BlogService, ImageService],
  exports : [BlogService]
})
export class BlogModule {}
