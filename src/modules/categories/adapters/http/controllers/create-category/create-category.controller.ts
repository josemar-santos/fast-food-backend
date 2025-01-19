import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateCategoryUseCase } from 'src/modules/categories/domain/use-cases/create-category-usecase/create-category.usecase';
import { CreateCategoryDto } from '../../validation/create-category';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageMapper } from 'src/modules/common/adapters/mapper/image.mapper';

@Controller('category')
export class CreateCategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

  @UseInterceptors(FileInterceptor('avatar'))
  @Post()
  async index(
    @Body() body: CreateCategoryDto,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    return this.createCategoryUseCase.execute({
      name: body.name,
      description: body.description,
      avatar: ImageMapper.toImage(avatar),
    });
  }
}
