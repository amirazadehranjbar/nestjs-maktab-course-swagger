import {PartialType} from "@nestjs/mapped-types";
import {CreateBlogDto} from "./createBlog.dto.js";


export class UpdateBlogDto extends PartialType(CreateBlogDto){}