import { CustomerNotFoundExecption } from 'src/modules/common/core/exceptions/not-found.exception';
import { FoodRepository } from 'src/modules/foods/ports/repositories/food.repository';

export class FindOneFoodUseCase {
  constructor(private foodRepository: FoodRepository) {}
  async execute(id: string) {
    const food = await this.foodRepository.findById(id);

    if(!food) {
        throw new CustomerNotFoundExecption("Food Not found")
    }


    return food;
  }


}
