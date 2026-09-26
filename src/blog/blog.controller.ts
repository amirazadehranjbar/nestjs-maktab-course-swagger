import {Body, Controller, Get, Post} from '@nestjs/common';
import {BlogService} from "./blog.service.js";
import {BlogDto} from "./dto/blog.dto.js";
import {ApiBody, ApiResponse} from "@nestjs/swagger";
import {BlogSchema} from "./schemas/blog.schema.js";

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) {
    }

    @Get()
    getAll() {
        return this.blogService.getAll()
    }

    @Post()
    async create(@Body() data: BlogDto): Promise<BlogDto> {
        return await this.blogService.create(data)
    }

}
