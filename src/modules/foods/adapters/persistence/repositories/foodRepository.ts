import { Injectable } from '@nestjs/common';
import { Page } from 'src/modules/common/core/page';
import { FoodEntity } from 'src/modules/foods/domain/entities/food';
import {
  SearchParam,
  Order,
  Sort,
} from 'src/modules/foods/domain/helpers/interfaces/search-params';
import { FoodRepository } from 'src/modules/foods/ports/repositories/food.repository';
import { Like, Repository } from 'typeorm';
import { FoodModel } from '../models/food.model';
import { InjectRepository } from '@nestjs/typeorm';
import { FoodMapper } from '../mapper/food.mapper';
import { CategoryRepository } from 'src/modules/categories/ports/repositories/category.repository';
import { CategoryMapper } from 'src/modules/categories/adapters/persitence/mapper/category.mapper';

@Injectable()
export class FoodRepositoryImplementation implements FoodRepository {
  constructor(
    @InjectRepository(FoodModel)
    private readonly repository: Repository<FoodModel>,
    private readonly mapper: FoodMapper,
    private readonly categoryRepository: CategoryRepository,
    private readonly categoryMapper: CategoryMapper,
  ) {}
  async findAll(
    page: number,
    perPage: number,
    search?: SearchParam,
    order?: Order,
    sort?: Sort,
  ): Promise<Page<FoodEntity>> {
    const where: any = {};
    const orderBy: any = {};

    if (order && sort) {
      orderBy[order] = sort;
    }

    if (search) {
      const { name, category, prepareTime, deleted } = search;

      if (name) where['name'] = Like(`%${name}%`);
      if (category) where['category'] = Like(`${category}`);
      if (prepareTime) where['prepareTime'] = Like(`${prepareTime}`);
      if (deleted) where['deleted'] = Like(`${deleted}`);
    }

    const [foods, total] = await this.repository.findAndCount({
      where,
      order: orderBy,
      relations: { category: true },
    });

    return this.mapper.toPage(foods, {
      page,
      perPage,
      total,
    });
  }

  async save(data: FoodEntity): Promise<FoodEntity> {
    const food = new FoodModel();

    const category = await this.categoryRepository.findByName(data.category);

    food.name = data.name;
    food.price = data.price;
    food.prepareTime = data.prepareTime;
    food.description = data.description;
    food.url = data.url;

    food.category = this.categoryMapper.toModel(category);

    const saved = await this.repository.save(food);
    return this.mapper.toEntity(saved);
  }
}
