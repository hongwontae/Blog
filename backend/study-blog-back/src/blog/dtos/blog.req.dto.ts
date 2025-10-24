import {IsDateString, IsNumber, IsString} from 'class-validator';

export class BlogReqDto {

    @IsString()
    title : string;

    @IsString()
    blogContent : string;


}