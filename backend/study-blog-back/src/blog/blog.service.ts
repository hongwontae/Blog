import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from './entities/blog.entity';
import { Repository } from 'typeorm';
import { BlogReqDto } from './dtos/blog.req.dto';

@Injectable()
export class BlogService {

    constructor(@InjectRepository(BlogEntity) private repo : Repository<BlogEntity>){};

    createPost(title : string, blogContent : string){
        const post = this.repo.create({title,blogContent});
        return this.repo.save(post);
    }

    async updatePost(id : number ,body : Partial<BlogReqDto>){
        const blog = await this.repo.findOneBy({id});
        if(!blog){
            throw new BadRequestException('blog 중복')
        }
        Object.assign(blog, body);

        return this.repo.save(blog);
    }

    async deletePost(id : number){
        const blog = await this.repo.findOneBy({id});
        if(!blog){
            throw new BadRequestException('deleted blog none');
        }
        return this.repo.remove(blog);
    }

}
