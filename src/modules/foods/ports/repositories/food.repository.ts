import { Page } from 'src/modules/common/core/page';
import { FoodEntity } from '../../domain/entities/food';
import {
  Order,
  SearchParam,
  Sort,
} from '../../domain/helpers/interfaces/search-params';

export abstract class FoodRepository {
  abstract findAll(
    page: number,
    perPage: number,
    search?: SearchParam,
    order?: Order,
    sort?: Sort,
  ): Promise<Page<FoodEntity>>;

  abstract save(food: FoodEntity): Promise<FoodEntity>;
  abstract findById(id: string): Promise<FoodEntity | null>;
  abstract existById(id: string): Promise<boolean>;
  abstract delete(id: string): Promise<void>;
}
