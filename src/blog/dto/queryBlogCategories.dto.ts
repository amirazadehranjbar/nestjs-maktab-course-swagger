import {blogCategoriesEnum} from "../../utils/blogEnums.dto.js";
import {ApiProperty} from "@nestjs/swagger";
import {IsEnum, IsOptional} from "class-validator";


export class QueryBlogCategoriesDto {

    @ApiProperty({required:false , default : blogCategoriesEnum.all})
    @IsOptional()
    @IsEnum(blogCategoriesEnum)
    categoryName: blogCategoriesEnum
}