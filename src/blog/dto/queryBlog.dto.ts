import {IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class QueryBlogDto {

    @ApiProperty({required:false})
    @IsOptional()
    @IsNumber()
    page: number

    @ApiProperty({required:false})
    @IsOptional()
    @IsNumber()
    limit: number

    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    title: string
}