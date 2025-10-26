import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BlogReqDto } from './dtos/blog.req.dto'
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {

    constructor(private blogService : BlogService){}

    @Post('/create')
    createBlogPost(@Body() body : BlogReqDto){
        return this.blogService.createPost(body.title, body.blogContent, body.field);
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
