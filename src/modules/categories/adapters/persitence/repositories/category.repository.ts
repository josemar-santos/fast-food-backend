import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/modules/categories/ports/repositories/category.repository';
import { CategoryModel } from '../models/categories.model';
import { Equal, Like, Repository } from 'typeorm';
import { CategoryEntity } from 'src/modules/categories/domain/entities/categories';
import { Page } from 'src/modules/common/core/page';
import { CategoryMapper } from '../mapper/category.mapper';

@Injectable()
export class CategoryRepositoryImplementation implements CategoryRepository {
  constructor(
    @InjectRepository(CategoryModel)
    private readonly repository: Repository<CategoryModel>,
    private readonly mapper: CategoryMapper,
  ) {}

  async save(data: CategoryEntity): Promise<CategoryEntity> {
    const category = new CategoryModel();

    category.name = data.name;
    category.description = data.description;
    category.avatar = data.avatar;

    return this.mapper.toEntity(await this.repository.save(category));
  }

  async existByName(name: string): Promise<boolean> {
    return this.repository.existsBy({ name });
  }

  async findAll(
    page: number,
    perPage: number,
    search?: string,
    deleted?: string,
  ): Promise<Page<CategoryEntity>> {
    const where: any = {};

    if (search) {
      where['name'] = Like(`%${search}%`);
    }
    if (deleted) {
      where['deleted'] = Equal(deleted);
    }

    const [categories, total] = await this.repository.findAndCount({
      skip: perPage * (page - 1),
      take: perPage,
      where: where,
    });

    return this.mapper.toPage(categories, {
      page,
      perPage,
      total,
    });
  }

  async findOne(id: string): Promise<CategoryEntity> {
    const category = await this.repository.findOne({ where: { id } });

    if (!category) {
      throw new NotFoundException('Category was not found');
    }

    return this.mapper.toEntity(category);
  }

  async existByAvatar(avatar: string): Promise<boolean> {
    return this.repository.existsBy({ avatar });
  }

  async delete(id: string): Promise<void> {
    await this.repository.update(id, { deleted: true });
  }

  async update(data: CategoryEntity): Promise<CategoryEntity> {
    const category = this.mapper.toModel(data);

    const updated = await this.repository.save(category);

    return this.mapper.toEntity(updated);
  }

  async findByName(name: string): Promise<CategoryEntity> {
    const category = await this.repository.findOne({ where: { name } });

    if (!category) {
      throw new NotFoundException('Category was not found');
    }

    return this.mapper.toEntity(category);
  }
}
