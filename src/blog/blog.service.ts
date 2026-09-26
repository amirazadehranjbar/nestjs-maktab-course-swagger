import {BlogDto} from "./dto/blog.dto.js";
import {InjectModel} from "@nestjs/mongoose";
import {Blog} from "./schemas/blog.schema.js";
import {BadRequestException, Injectable, NotFoundException} from "@nestjs/common";
import {Model} from 'mongoose';

@Injectable()
export class BlogService {


    constructor(@InjectModel(Blog.name) private readonly blogModel: Model<Blog>) {
    }

    async getAll() {

        try {
            return await this.blogModel.find()
        } catch (e) {
            throw new NotFoundException()
        }

    }

    getOne(id: string) {
        return `get blog by ID =>${id}`
    }

    async create(data: BlogDto) {

        try {
            const newBlog = new this.blogModel(data);
            await newBlog.save()
            return newBlog
        } catch (e) {
            throw new BadRequestException(e)
        }
    }

    update(id: string) {
        return `update ${id}`
    }

    delete(id: string) {
        return `delete ${id}`
    }

}
