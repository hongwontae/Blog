import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './blog/entities/blog.entity';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ImagesEntity } from './blog/entities/images.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? '.env.development'
          : '.env.default',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'blog',
      port: 3306,
      host: 'localhost',
      username: 'hwt',
      password: '1234',
      entities: [BlogEntity, ImagesEntity],
      synchronize: true, // 개발 시에만
    }),
    BlogModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
