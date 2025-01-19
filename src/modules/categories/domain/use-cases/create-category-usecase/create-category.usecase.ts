import { CategoryRepository } from 'src/modules/categories/ports/repositories/category.repository';
import { CreateCategoyPayload } from '../../helpers/create-category';
import { CategoryExistException } from '../../execptions/category-exception';
import { CategoryEntity } from '../../entities/categories';
import { UploadService } from 'src/modules/common/ports/services/upload-service/upload.service';

export class CreateCategoryUseCase {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly uploadService: UploadService,
  ) {}

  async execute(data: CreateCategoyPayload) {
    const existCategory = await this.categoryRepository.existByName(data.name);

    if (existCategory) {
      throw new CategoryExistException();
    }

    const avatar = await this.uploadService.upload(data.avatar);

    const category = CategoryEntity.builder()
      .setName(data.name)
      .setDescription(data.description)
      .setAvatar(avatar);

    return this.categoryRepository.save(category);
  }
}
