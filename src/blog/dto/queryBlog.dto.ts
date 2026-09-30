import {IsEnum, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {orderEnum, selectQueryEnum, sortEnum} from "../../utils/blogEnums.dto.js";


export class QueryBlogDto {

    @ApiProperty({required:false})
    @IsOptional()
    @IsNumber()
    page: number

    @ApiProperty({required:false})
    @IsOptional()
    @IsNumber()
    limit: number

    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    title: string

    @ApiProperty({required: false, enum: sortEnum, default: sortEnum.CreatedAt})
    @IsOptional()
    @IsEnum(sortEnum)
    sortBy: sortEnum

    @ApiProperty({required: false, enum: orderEnum, default: orderEnum.Desc})
    @IsOptional()
    @IsEnum(orderEnum)
    order: orderEnum


    @ApiProperty({required:false , enum:selectQueryEnum , default : selectQueryEnum.all})
    @IsOptional()
    @IsEnum(selectQueryEnum)
    select:selectQueryEnum
}