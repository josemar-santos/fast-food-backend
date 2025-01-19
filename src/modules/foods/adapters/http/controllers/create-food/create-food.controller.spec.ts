import { Test, TestingModule } from '@nestjs/testing';
import { CreateFoodController } from './create-food.controller';

describe('CreateFoodController', () => {
  let controller: CreateFoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateFoodController],
    }).compile();

    controller = module.get<CreateFoodController>(CreateFoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
