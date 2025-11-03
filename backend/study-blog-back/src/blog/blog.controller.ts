import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
  
} from '@nestjs/common';
import { BlogReqDto, ImageMetadata } from './dtos/blog.req.dto';
import { BlogService } from './blog.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @UseInterceptors(FilesInterceptor('images'))
  @Post('/create')
  createBlogPost(
    @Body('title') title : string,
    @Body('blogContent') blogContent : string,
    @Body('field') field : string,
    @Body('metadata') metadataString : string,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    console.log(field)

    const metadata : ImageMetadata[] = JSON.parse(metadataString)
    
    return this.blogService.createPost(title, field, blogContent, metadata, files)
  }

  @Patch('/update/:id')
  updateBlogPost(@Param('id') id: number, @Body() body: Partial<BlogReqDto>) {
    return this.blogService.updatePost(id, body);
  }

  @Delete('/delete/:id')
  deleteBlogPost(@Param('id') id: number) {
    return this.blogService.deletePost(id);
  }

  @Get('/test/2')
  showPosts(){
    return this.blogService.showPosts();
  }
}
