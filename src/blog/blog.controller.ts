import {BadRequestException, Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {BlogService} from "./blog.service.js";
import {CreateBlogDto} from "./dto/createBlog.dto.js";
import {ApiBody, ApiResponse} from "@nestjs/swagger";
import {BlogSchema} from "./schemas/blog.schema.js";
import {UpdateBlogDto} from "./dto/updateBlog.dto.js";

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) {
    }

    @Get()
    getAll() {
        return this.blogService.getAll()
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
