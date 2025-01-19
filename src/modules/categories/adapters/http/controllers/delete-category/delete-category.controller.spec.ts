import { Test, TestingModule } from '@nestjs/testing';
import { DeleteCategoryController } from './delete-category.controller';

describe('DeleteCategoryController', () => {
  let controller: DeleteCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteCategoryController],
    }).compile();

    controller = module.get<DeleteCategoryController>(DeleteCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
