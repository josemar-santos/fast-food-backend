import { Page } from 'src/modules/common/core/page';
import { CategoryEntity } from '../../domain/entities/categories';

export abstract class CategoryRepository {
  abstract save(data: CategoryEntity): Promise<CategoryEntity>;
  abstract existByName(name: string): Promise<boolean>;
  abstract findAll(
    page: number,
    perPage: number,
    search?: string,
    deleted?: string,
  ): Promise<Page<CategoryEntity>>;
  abstract findId(id: string): Promise<CategoryEntity | null>;
  abstract delete(id: string): Promise<void>;
  abstract existByAvatar(avatar: string): Promise<boolean>;
  abstract update(data: CategoryEntity): Promise<CategoryEntity>;
  abstract findByName(name: string): Promise<CategoryEntity | null>;
}
