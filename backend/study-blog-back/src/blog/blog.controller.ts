import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { BlogReqDto } from './dtos/blog.req.dto'
import { BlogService } from './blog.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('blog')
export class BlogController {

    constructor(private blogService : BlogService){}

    @UseInterceptors(FileInterceptor('image'))
    @Post('/create')
    createBlogPost(@Body() body : BlogReqDto,@UploadedFile() file : Express.Multer.File){
        return this.blogService.createPost(body.title, body.blogContent, body.field, file);
    }

    @Patch('/update/:id')
    updateBlogPost(@Param('id') id : number,@Body() body : Partial<BlogReqDto>){
        return this.blogService.updatePost(id, body);
    }

    @Delete('/delete/:id')
    deleteBlogPost(@Param('id') id : number){
        return this.blogService.deletePost(id)
    }

    @Get('/show/:id')
    showBlogPost(@Param('id') id : number){
        return this.blogService.showPost(id);
    }

    @Get('/shows')
    showBlogPosts(){
        return 
    }

}
