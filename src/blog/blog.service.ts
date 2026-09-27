import {CreateBlogDto} from "./dto/createBlog.dto.js";
import {InjectModel} from "@nestjs/mongoose";
import {Blog} from "./schemas/blog.schema.js";
import {BadRequestException, Injectable, NotFoundException} from "@nestjs/common";
import {Model , QueryFilter} from 'mongoose';
import {UpdateBlogDto} from "./dto/updateBlog.dto.js";
import {QueryBlogDto} from "./dto/queryBlog.dto.js";


@Injectable()
export class BlogService {


    constructor(@InjectModel(Blog.name) private readonly blogModel: Model<Blog>) {
    }

    async getAll(query: QueryBlogDto) {

        const {page = 1, limit = 10 , title} = query;

        const searchQuery:QueryFilter<Blog> = {}

        if (title){
            searchQuery.title = {$regex:title , $options:"i"};
        }

        try {
            const blogsCount = await this.blogModel.countDocuments(searchQuery);
            const blog = await this.blogModel.find(searchQuery).skip(page - 1).limit(limit);
            return {blogsCount, blog}
        } catch (e) {
            throw new NotFoundException()
        }

    }

    async getOne(id: string) {

        try {
            return await this.blogModel.findById(id);
        } catch (e) {
            return new NotFoundException()
        }


    }

    async create(data: CreateBlogDto) {

        try {
            const newBlog = new this.blogModel(data);
            await newBlog.save()
            return newBlog
        } catch (e) {
            throw new BadRequestException(e)
        }
    }

    async update(id: string, data: UpdateBlogDto) {
        try {
            const updated = await this.blogModel.findByIdAndUpdate(id, data, {returnDocument: "after"})
            if (!updated) throw new NotFoundException(`Blog ${id} not found`)
            return updated
        } catch (e) {
            if (e instanceof NotFoundException) throw e
            throw new BadRequestException(e instanceof Error ? e.message : e)
        }
    }

    delete(id: string) {
        return `delete ${id}`
    }

}
