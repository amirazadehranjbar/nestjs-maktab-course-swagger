import {IsNumber, IsOptional, IsString} from "class-validator";

export class QueryBlogDto {

    @IsOptional()
    @IsNumber()
    page: number

    @IsOptional()
    @IsNumber()
    limit: number

    @IsOptional()
    @IsString()
    title: string
}