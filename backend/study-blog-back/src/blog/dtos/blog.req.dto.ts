import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsBoolean, IsString, IsOptional, ValidateNested} from 'class-validator';

export class ImageMetadata {
    @IsString()
    alt : string;

    @IsOptional()
    @IsBoolean()
    cover? : boolean;

    @IsString()
    src : string

}

export class BlogReqDto {

    @IsString()
    title : string;

    @IsString()
    blogContent : string;

    @IsString()
    field : string;


    @IsArray()
    @ValidateNested({each : true})
    @Type(()=>ImageMetadata)
    metadata : ImageMetadata[];

}

