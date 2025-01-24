import { Test, TestingModule } from '@nestjs/testing';
import { DeleteFoodController } from './delete-food.controller';

describe('DeleteFoodController', () => {
  let controller: DeleteFoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteFoodController],
    }).compile();

    controller = module.get<DeleteFoodController>(DeleteFoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
