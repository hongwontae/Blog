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
import { BlogReqDto } from './dtos/blog.req.dto';
import { BlogService } from './blog.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @UseInterceptors(FilesInterceptor('images'))
  @Post('/create')
  createBlogPost(
    @Body() body : BlogReqDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    console.log(files)
    console.log(body);
    return {name : 'ddd'};
  }

  @Patch('/update/:id')
  updateBlogPost(@Param('id') id: number, @Body() body: Partial<BlogReqDto>) {
    return this.blogService.updatePost(id, body);
  }

  @Delete('/delete/:id')
  deleteBlogPost(@Param('id') id: number) {
    return this.blogService.deletePost(id);
  }

  @Get('/show/:id')
  showBlogPost(@Param('id') id: number) {
    return this.blogService.showPost(id);
  }

  @Get('/shows')
  showBlogPosts() {
    return;
  }
}
