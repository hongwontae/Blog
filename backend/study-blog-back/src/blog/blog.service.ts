import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from './entities/blog.entity';
import { Repository } from 'typeorm';
import { BlogReqDto } from './dtos/blog.req.dto';
import { ConfigService } from '@nestjs/config';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity) private repo: Repository<BlogEntity>,
    private cloudinaryService: CloudinaryService,
  ) {}

  async createPost(
    title: string,
    blogContent: string,
    field: string,
    file: Express.Multer.File,
  ) {
    const imageData = await this.cloudinaryService.uploadImage(file);
    console.log(imageData.url)
    const post = this.repo.create({ title, blogContent, field });

    return this.repo.save(post);
  }

  async updatePost(id: number, body: Partial<BlogReqDto>) {
    const blog = await this.repo.findOneBy({ id });
    if (!blog) {
      throw new BadRequestException('blog 중복');
    }
    Object.assign(blog, body);

    return this.repo.save(blog);
  }

  async deletePost(id: number) {
    const post = await this.repo.findOneBy({ id });
    if (!post) {
      throw new BadRequestException('deleted blog none');
    }
    return this.repo.remove(post);
  }

  async showPost(id: number) {
    const post = await this.repo.findOneBy({ id });
    if (!post) {
      throw new BadRequestException('not matched blog post');
    }

    return post;
  }

  async showPosts() {}
}
