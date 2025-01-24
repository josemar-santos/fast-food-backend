import { Injectable } from '@nestjs/common';
import { Mapper } from 'src/modules/common/core/mapper';
import { CategoryModel } from '../model/categories.model';
import { CategoryEntity } from 'src/modules/categories/domain/entities/categories';

@Injectable()
export class CategoryMapper extends Mapper<CategoryEntity, CategoryModel> {
  protected convert(data: CategoryModel): CategoryEntity {
    const category = CategoryEntity.builder()
      .setId(data.id)
      .setAvatar(data.avatar)
      .setDescription(data.description)
      .setName(data.name)
      .setCreatedAt(data.createdAt)
      .setUpdatedAt(data.updatedAt)
      .setDeleted(data.deleted);

    return category;
  }

  toEntity(data: CategoryModel): CategoryEntity {
    return this.convert(data);
  }

  toModel(data: CategoryEntity): CategoryModel {
    const category = new CategoryModel();

    category.id = data.id;
    category.name = data.name;
    category.description = data.description;
    category.avatar = data.avatar;
    category.createdAt = data.createdAt;
    category.updatedAt = data.updatedAt;

    return category;
  }
}
