import { Test, TestingModule } from '@nestjs/testing';
import { FindOneFoodController } from './find-one-food.controller';

describe('FindOneFoodController', () => {
  let controller: FindOneFoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneFoodController],
    }).compile();

    controller = module.get<FindOneFoodController>(FindOneFoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
