import { ArrayNotEmpty, IsArray, IsNumber, IsString} from 'class-validator';

export class BlogReqDto {

    @IsString()
    title : string;

    @IsString()
    blogContent : string;

    @IsString()
    field : string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({each : true})
    alt : string;

}