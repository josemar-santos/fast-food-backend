import { CategoryRepository } from 'src/modules/categories/ports/repositories/category.repository';
import { DeleteMessage } from 'src/modules/common/core/delete-message';
import { CustomerNotFoundExecption } from 'src/modules/common/core/exceptions/not-found.exception';

export class DeleteCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(id: string) {
    const category = await this.categoryRepository.findId(id);

    if(!category) {
      throw new CustomerNotFoundExecption("Category not found")
    }
    
    await this.categoryRepository.delete(category.id);

    return DeleteMessage.response(category.name);
  }
}
