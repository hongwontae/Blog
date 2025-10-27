import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './entities/blog.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { ImagesEntity } from './entities/images.entity';

@Module({
  imports : [TypeOrmModule.forFeature([BlogEntity, ImagesEntity]), CloudinaryModule],
  controllers: [BlogController,],
  providers: [BlogService],
  exports : [BlogService]
})
export class BlogModule {}
