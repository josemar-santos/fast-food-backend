import { Test, TestingModule } from '@nestjs/testing';
import { FindoneCategoryController } from './findone-category.controller';

describe('FindoneCategoryController', () => {
  let controller: FindoneCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindoneCategoryController],
    }).compile();

    controller = module.get<FindoneCategoryController>(FindoneCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
