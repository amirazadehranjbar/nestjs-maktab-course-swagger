import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({timestamps: true})
export class Blog {

    @Prop({required: true, unique: true})
    title: string

    @Prop()
    content: string
}

export const BlogSchema = SchemaFactory.createForClass(Blog)