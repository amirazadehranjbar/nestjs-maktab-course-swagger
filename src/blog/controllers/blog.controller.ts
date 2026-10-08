import {Body, Controller, Get, Param, Post, Put, Query} from '@nestjs/common';
import {BlogService} from "../services/blog.service.js";
import {CreateBlogDto} from "../dto/createBlog.dto.js";
import {UpdateBlogDto} from "../dto/updateBlog.dto.js";
import {QueryBlogDto} from "../dto/queryBlog.dto.js";
import {ApiProperty} from "@nestjs/swagger";
import {sortEnum} from "../../utils/blogEnums.dto.js";

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) {
    }

    @Get()
    getAll(@Query() query: QueryBlogDto) {
        return this.blogService.getAll(query)
    }

    @Post()
    async create(@Body() data: CreateBlogDto): Promise<CreateBlogDto> {
        return await this.blogService.create(data)
    }

    @Get(":id")
    async getOne(@Param("id") id: string) {
        return await this.blogService.getOne(id);
    }

    @Put(":id")
    async update(@Param("id") id: string, @Body() newData: UpdateBlogDto) {
        return await this.blogService.update(id, newData);
    }

}
