import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from './entities/blog.entity';
import { Repository } from 'typeorm';
import { BlogReqDto } from './dtos/blog.req.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { ImagesEntity } from './entities/images.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity) private repo: Repository<BlogEntity>,
    private cloudinaryService: CloudinaryService,
    @InjectRepository(ImagesEntity)
    private imagesRepo: Repository<ImagesEntity>,
  ) {}

  async createPost(
    title: string,
    blogContent: string,
    field: string,
    files: Express.Multer.File[],
  ) {
    const post = this.repo.create({ title, blogContent, field });
    const postResult = await this.repo.save(post);

    const imageEntities: ImagesEntity[] = [];

    for (const file of files) {
      const uploadResult = await this.cloudinaryService.uploadImage(file);
      const result = this.imagesRepo.create({
        public_id: uploadResult.public_id,
        secure_url: uploadResult.secure_url,
        post : postResult
      });
      imageEntities.push(result);
    }

    // 배열 형식으로 전달해도 저장합니다.
    const imageResult = await this.imagesRepo.save(imageEntities);

    return { postResult, imageResult };
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
