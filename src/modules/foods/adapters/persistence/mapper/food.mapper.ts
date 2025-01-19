import { Mapper } from 'src/modules/common/core/mapper';
import { FoodEntity } from 'src/modules/foods/domain/entities/food';
import { FoodModel } from '../models/food.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodMapper extends Mapper<FoodEntity, FoodModel> {
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
