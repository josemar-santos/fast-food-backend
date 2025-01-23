import { CategoryRepository } from 'src/modules/categories/ports/repositories/category.repository';
import { CustomerNotFoundExecption } from 'src/modules/common/core/exceptions/not-found.exception';

export class FindOneCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) { }
  execute(id: string) {
    const category = this.categoryRepository.findId(id);

    if (!category) {
      throw new CustomerNotFoundExecption("Category not found")
    }


    return category;
  }
}
