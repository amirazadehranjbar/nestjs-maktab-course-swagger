import {IsNotEmpty, IsString, ValidateNested} from "class-validator";
import {CreateBlogCategoryDto} from "./create-blog-category.dto.js";
import {Type} from "class-transformer";
import {BlogCategory} from "../schemas/blog-category.scehma.js";

export class CreateBlogDto {

    @IsString()
    @IsNotEmpty()
    title: string


    @IsString()
    @IsNotEmpty()
    content: string

    @Type(() => CreateBlogCategoryDto)     // Tells class-transformer how to deserialize the object
    @IsNotEmpty()
    category: BlogCategory
}