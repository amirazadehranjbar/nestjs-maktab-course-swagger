import {Module} from '@nestjs/common';
import {BlogService} from './blog.service.js';
import {BlogController} from './blog.controller.js';
import {MongooseModule} from "@nestjs/mongoose";
import {Blog, BlogSchema} from "./schemas/blog.schema.js";

@Module({
    imports: [MongooseModule.forFeature([{name: Blog.name, schema: BlogSchema}])],
    providers: [BlogService],
    controllers: [BlogController]
})
export class BlogModule {
}
