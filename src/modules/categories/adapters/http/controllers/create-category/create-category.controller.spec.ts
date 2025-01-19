import { Test, TestingModule } from '@nestjs/testing';
import { CreateCategoryController } from './create-category.controller';

describe('CreateCategoryController', () => {
  let controller: CreateCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCategoryController],
    }).compile();

    controller = module.get<CreateCategoryController>(CreateCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
