import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodModel } from './adapters/persistence/models/food.model';
import { FoodMapper } from './adapters/persistence/mapper/food.mapper';
import { FoodRepositoryImplementation } from './adapters/persistence/repositories/food.repository';
import { FoodRepository } from './ports/repositories/food.repository';
import { ListFoodUseCase } from './domain/use-cases/list-food-usecase/list-food.usecase';
import { ListFoodController } from './adapters/http/controllers/list-food/list-food.controller';
import { CategoriesModule } from '../categories/categories.module';
import { CreateFoodController } from './adapters/http/controllers/create-food/create-food.controller';
import { UploadService } from '../common/ports/services/upload-service/upload.service';
import { CreateFoodUseCase } from './domain/use-cases/create-food-usecase/create-food.usecase';
import { CategoryRepository } from '../categories/ports/repositories/category.repository';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FoodModel]),
    CategoriesModule,
    CommonModule,
  ],
  providers: [
    FoodMapper,
    {
      useClass: FoodRepositoryImplementation,
      provide: FoodRepository,
    },
    {
      provide: ListFoodUseCase,
      useFactory: (foodRepository: FoodRepository) => {
        return new ListFoodUseCase(foodRepository);
      },
      inject: [FoodRepository],
    },
    {
      provide: CreateFoodUseCase,
      useFactory: (
        foodRepository: FoodRepository,
        uploadService: UploadService,
        categoryRepository: CategoryRepository,
      ) => {
        return new CreateFoodUseCase(
          foodRepository,
          uploadService,
          categoryRepository,
        );
      },
      inject: [FoodRepository, UploadService, CategoryRepository],
    },
  ],
  controllers: [ListFoodController, CreateFoodController],
  exports: [
    FoodRepository,
    FoodMapper,
    TypeOrmModule
  ]
})
export class FoodModule {}
