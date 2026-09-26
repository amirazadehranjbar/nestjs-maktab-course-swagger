import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class BlogDto {

    @ApiProperty({type:"string", example:"title 1"})
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({type:"string" , example:"content 1"})
    @IsString()
    @IsNotEmpty()
    content: string
}