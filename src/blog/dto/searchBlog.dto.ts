import {ApiProperty} from "@nestjs/swagger";
import {IsDate, IsOptional, IsString} from "class-validator";


export enum sortEnum {
    Title = 'title',
    CreatedAt = 'createdAt',
    UpdatedAt = 'updatedAt'
}

export enum orderEnum {
    Asc = 'asc',
    Desc = 'desc'
}

export class SearchBlogDto {

    @ApiProperty({required: false, enum: sortEnum, isArray: true})
    @IsString()
    @IsOptional()
    title: string


    @ApiProperty({required: false, enum: sortEnum, isArray: true})
    @IsDate()
    @IsOptional()
    createdAt: Date


    @ApiProperty({required: false, enum: sortEnum, isArray: true})
    @IsDate()
    @IsOptional()
    updatedAt: Date
}