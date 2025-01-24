import { Controller, Get, Query } from '@nestjs/common';
import { ListFoodUseCase } from 'src/modules/foods/domain/use-cases/list-food-usecase/list-food.usecase';
import { PageProps } from '../../dto/page.dto';

@Controller('food')
export class ListFoodController {
  constructor(private readonly listFoodUseCase: ListFoodUseCase) {}
  @Get()
  index(@Query() pagination: PageProps) {

    const params = {
      deleted: pagination.deleted,
      name: pagination.name,
      prepareTime: pagination.prepareTime,
      category: pagination.category,
    }

    return this.listFoodUseCase.execute(
      pagination.page,
      pagination.perPage,
      pagination.order,
      pagination.sort,
      params
    );
  }
}
