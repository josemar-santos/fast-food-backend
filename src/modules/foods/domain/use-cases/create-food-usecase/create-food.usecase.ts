import { FoodRepository } from 'src/modules/foods/ports/repositories/food.repository';
import { CreateFoodDto } from '../../helpers/dto/create-food';
import { UploadService } from 'src/modules/common/ports/services/upload-service/upload.service';
import { FoodEntity } from '../../entities/food';
import { CategoryRepository } from 'src/modules/categories/ports/repositories/category.repository';
import { CategoryNotFound } from 'src/modules/categories/domain/execptions/category-notfound.exception';

export class CreateFoodUseCase {
  constructor(
    private readonly foodRepository: FoodRepository,
    private readonly uploadService: UploadService,
    private readonly categoryRepository: CategoryRepository,
  ) {}
  async exec(data: CreateFoodDto) {
    const existCategory = this.categoryRepository.existByName(data.name);

    if (!existCategory) {
      throw new CategoryNotFound();
    }

    const avatar = await this.uploadService.upload(data.url);

    const food = FoodEntity.builder()
      .setName(data.name)
      .setPrice(data.price)
      .setPrepareTime(data.prepareTime)
      .setCategory(data.category)
      .setUrl(avatar)
      .setDescription(data.description);

    return this.foodRepository.save(food);
  }
}
