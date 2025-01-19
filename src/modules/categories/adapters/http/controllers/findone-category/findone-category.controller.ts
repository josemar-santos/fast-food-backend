import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { FindOneCategoryUseCase } from 'src/modules/categories/domain/use-cases/findOne-category-usecase/findOne-category.usecase';

@Controller('category')
export class FindoneCategoryController {
  constructor(
    private readonly findOneCategoryUseCase: FindOneCategoryUseCase,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  index(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.findOneCategoryUseCase.execute(id);
  }
}
