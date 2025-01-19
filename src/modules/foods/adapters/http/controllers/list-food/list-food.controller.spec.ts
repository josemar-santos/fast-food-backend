import { Test, TestingModule } from '@nestjs/testing';
import { ListFoodController } from './list-food.controller';

describe('ListFoodController', () => {
  let controller: ListFoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListFoodController],
    }).compile();

    controller = module.get<ListFoodController>(ListFoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
