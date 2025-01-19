import { CategoryRepository } from 'src/modules/categories/ports/repositories/category.repository';

export class FindOneCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  execute(id: string) {
    return this.categoryRepository.findOne(id);
  }
}
