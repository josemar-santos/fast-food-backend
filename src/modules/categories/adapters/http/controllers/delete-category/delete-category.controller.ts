import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { DeleteCategoryUseCase } from 'src/modules/categories/domain/use-cases/delete-category-usecase/delete-category.usecase';

@Controller('category')
export class DeleteCategoryController {
  constructor(private readonly deleteCategoryUseCase: DeleteCategoryUseCase) {}

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  index(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.deleteCategoryUseCase.execute(id);
  }
}
