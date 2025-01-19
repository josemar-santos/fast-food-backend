import { CategoryRepository } from 'src/modules/categories/ports/repositories/category.repository';

export class ListCategoriesUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(
    page: number,
    perPage: number,
    search?: string,
    deleted?: string,
  ) {
    return this.categoryRepository.findAll(page, perPage, search, deleted);
  }
}
