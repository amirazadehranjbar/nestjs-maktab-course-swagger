import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Types} from "mongoose";
import {BlogCategory} from "./blog-category.scehma.js";

@Schema({timestamps: true})
export class Blog {

    @Prop({required: true, unique: true})
    title: string

    @Prop()
    content: string

    @Prop({required:true , type: Types.ObjectId , ref : BlogCategory.name})
    category: BlogCategory
}

export const BlogSchema = SchemaFactory.createForClass(Blog)