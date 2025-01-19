import { CategoryRepository } from 'src/modules/categories/ports/repositories/category.repository';

export class DeleteCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<void> {
    const category = await this.categoryRepository.findOne(id);

    await this.categoryRepository.delete(category.id);
  }
}
