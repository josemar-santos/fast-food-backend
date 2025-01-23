import { CategoryRepository } from 'src/modules/categories/ports/repositories/category.repository';
import { CreateCategoyPayload } from '../../helpers/create-category';
import { UploadService } from 'src/modules/common/ports/services/upload-service/upload.service';
import { CustomerNotFoundExecption } from 'src/modules/common/core/exceptions/not-found.exception';

export class UpdateCategoryUseCase {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly uploadService: UploadService,
  ) { }

  async execute(id: string, data: CreateCategoyPayload) {
    const category = await this.categoryRepository.findId(id);

    if (!category) {
      throw new CustomerNotFoundExecption("Category not found")
    }
    
    const existAvatar = await this.categoryRepository.existByAvatar(
      data.avatar.filename,
    );

    if (category.avatar !== data.avatar.filename && !existAvatar) {
      const avatar = await this.uploadService.upload(data.avatar);
      category.setAvatar(avatar);
    }

    return this.categoryRepository.update(category);
  }
}
