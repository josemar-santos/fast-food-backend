import { Test, TestingModule } from '@nestjs/testing';
import { ListCategoryController } from './list-category.controller';

describe('ListCategoryController', () => {
  let controller: ListCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListCategoryController],
    }).compile();

    controller = module.get<ListCategoryController>(ListCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
