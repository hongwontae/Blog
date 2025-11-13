import { Test } from '@nestjs/testing';
import { BlogService } from './blog.service';
import { ImageMetadata } from './dtos/blog.req.dto';

it('can create an instance of blog service', async () => {


  const module = await Test.createTestingModule({
    providers: [BlogService],
  }).compile();

  const blogService = module.get(BlogService);

  expect(blogService).toBeDefined();
});
