import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
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
    @Body() body : BlogReqDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {


    console.log(body)
    console.log(files)

    return this.blogService.createPost(
      body.title,
      body.field,
      body.blogContent,
      JSON.parse(body.metadata) as ImageMetadata[],
      files,
    );
  }

  @Patch('/update/:id')
  updateBlogPost(@Param('id') id: number, @Body() body: Partial<BlogReqDto>) {
    return this.blogService.updatePost(id, body);
  }

  @Delete('/delete/:id')
  deleteBlogPost(@Param('id') id: number) {
    return this.blogService.deletePost(id);
  }

  @Get('/post')
  showPosts(
    @Query()
    query: {
      react: boolean;
      css: boolean;
      figma: boolean;
      javascript: boolean;
      typescript: boolean;
      photoshop: boolean;
    },
  ) {
    return this.blogService.showPosts(query);
  }
}
