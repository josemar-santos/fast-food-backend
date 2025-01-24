import { Mapper } from 'src/modules/common/core/mapper';
import { FoodEntity } from 'src/modules/foods/domain/entities/food';
import { FoodModel } from '../model/food.model';
import { Injectable } from '@nestjs/common';
import { CategoryMapper } from 'src/modules/categories/adapters/persitence/mapper/category.mapper';
import { CategoryRepository } from 'src/modules/categories/ports/repositories/category.repository';

@Injectable()
export class FoodMapper extends Mapper<FoodEntity, FoodModel> {

  constructor(
    private readonly categoryMapper: CategoryMapper,
    private readonly categoryRepository: CategoryRepository
  ) {
    super();
  }

  protected convert(data: FoodModel): FoodEntity {
    return FoodEntity.builder()
      .setId(data.id)
      .setName(data.name)
      .setCategory(data.category.name)
      .setDescription(data.description)
      .setPrepareTime(data.prepareTime)
      .setPrice(data.price)
      .setUrl(data.url)
      .setDeleted(data.deleted)
      .setUpdatedAt(data.updatedAt)
      .setCreatedAt(data.createdAt);
  }

  toEntity(model: FoodModel): FoodEntity {
    return this.convert(model);
  }
}
