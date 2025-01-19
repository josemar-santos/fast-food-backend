import { Module } from '@nestjs/common';
import { CategoryRepository } from './ports/repositories/category.repository';
import { CategoryRepositoryImplementation } from './adapters/persitence/repositories/category.repository';
import { ListCategoriesUseCase } from './domain/use-cases/list-categories-usecase/list-categories.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModel } from './adapters/persitence/models/categories.model';
import { CategoryMapper } from './adapters/persitence/mapper/category.mapper';
import { CreateCategoryUseCase } from './domain/use-cases/create-category-usecase/create-category.usecase';
import { CreateCategoryController } from './adapters/http/controllers/create-category/create-category.controller';
import { CommonModule } from '../common/common.module';
import { UploadService } from '../common/ports/services/upload-service/upload.service';
import { ListCategoryController } from './adapters/http/controllers/list-category/list-category.controller';
import { FindoneCategoryController } from './adapters/http/controllers/findone-category/findone-category.controller';
import { FindOneCategoryUseCase } from './domain/use-cases/findOne-category-usecase/findOne-category.usecase';
import { DeleteCategoryUseCase } from './domain/use-cases/delete-category-usecase/delete-category.usecase';
import { UpdateCategoryController } from './adapters/http/controllers/update-category/update-category.controller';
import { DeleteCategoryController } from './adapters/http/controllers/delete-category/delete-category.controller';
import { UpdateCategoryUseCase } from './domain/use-cases/update-category-usecase/update-category.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryModel]), CommonModule],
  providers: [
    CategoryMapper,
    {
      provide: CategoryRepository,
      useClass: CategoryRepositoryImplementation,
    },
    {
      provide: ListCategoriesUseCase,
      useFactory: (categoryRepository: CategoryRepository) => {
        return new ListCategoriesUseCase(categoryRepository);
      },
      inject: [CategoryRepository],
    },
    {
      provide: FindOneCategoryUseCase,
      useFactory: (categoryRepository: CategoryRepository) => {
        return new FindOneCategoryUseCase(categoryRepository);
      },
      inject: [CategoryRepository],
    },
    {
      provide: DeleteCategoryUseCase,
      useFactory: (categoryRepository: CategoryRepository) => {
        return new DeleteCategoryUseCase(categoryRepository);
      },
      inject: [CategoryRepository],
    },
    {
      provide: CreateCategoryUseCase,
      useFactory: (
        categoryRepository: CategoryRepository,
        uploadService: UploadService,
      ) => {
        return new CreateCategoryUseCase(categoryRepository, uploadService);
      },
      inject: [CategoryRepository, UploadService],
    },
    {
      provide: UpdateCategoryUseCase,
      useFactory: (
        categoryRepository: CategoryRepository,
        uploadService: UploadService,
      ) => {
        return new UpdateCategoryUseCase(categoryRepository, uploadService);
      },
      inject: [CategoryRepository, UploadService],
    },
  ],
  controllers: [
    CreateCategoryController,
    ListCategoryController,
    FindoneCategoryController,
    UpdateCategoryController,
    DeleteCategoryController,
  ],
  exports: [CategoryRepository, CategoryMapper],
})
export class CategoriesModule {}
