import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { BlogEntity } from './blog/entities/blog.entity';

@Module({
  imports: [BlogModule, TypeOrmModule.forRoot({
    type : 'mysql',
    database : 'blog',
    port : 3306,
    host : 'localhost',
    username : 'hwt',
    password : '1234',
    entities : [BlogEntity],
    synchronize : true // 개발 시에만
  })],
})
export class AppModule {}
