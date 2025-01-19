import { Controller, Get, Query } from '@nestjs/common';
import { ListCategoriesUseCase } from 'src/modules/categories/domain/use-cases/list-categories-usecase/list-categories.usecase';
import { PageProps } from '../../validation/page-props';

@Controller('category')
export class ListCategoryController {
  constructor(private readonly listCategoryUseCase: ListCategoriesUseCase) {}
  @Get()
  index(@Query() pagination: PageProps) {
    return this.listCategoryUseCase.execute(
      pagination.page,
      pagination.perPage,
      pagination.search,
      pagination.deleted,
    );
  }
}
