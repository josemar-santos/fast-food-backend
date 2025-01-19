import { FoodRepository } from 'src/modules/foods/ports/repositories/food.repository';
import {
  Order,
  SearchParam,
  Sort,
} from '../../helpers/interfaces/search-params';

export class ListFoodUseCase {
  constructor(private foodRepository: FoodRepository) {}
  async execute(
    page: number,
    perPage: number,
    order?: Order,
    sort?: Sort,
    search?: SearchParam,
  ) {
    return this.foodRepository.findAll(page, perPage, search, order, sort);
  }
}
