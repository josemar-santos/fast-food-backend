import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateCategoryUseCase } from 'src/modules/categories/domain/use-cases/update-category-usecase/update-category.usecase';
import { CreateCategoryDto } from '../../validation/create-category';
import { ImageMapper } from 'src/modules/common/adapters/mapper/image.mapper';

@Controller('category')
export class UpdateCategoryController {
  constructor(private readonly updateCategoryUseCase: UpdateCategoryUseCase) {}

  @UseInterceptors(FileInterceptor('avatar'))
  @Put(':id')
  async index(
    @Body() body: CreateCategoryDto,
    @UploadedFile() avatar: Express.Multer.File,
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    return this.updateCategoryUseCase.execute(id, {
      name: body.name,
      description: body.description,
      avatar: ImageMapper.toImage(avatar),
    });
  }
}
