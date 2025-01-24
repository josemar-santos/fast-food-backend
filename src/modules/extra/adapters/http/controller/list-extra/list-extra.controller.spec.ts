import { Test, TestingModule } from '@nestjs/testing';
import { ListExtraController } from './list-extra.controller';

describe('ListExtraController', () => {
  let controller: ListExtraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListExtraController],
    }).compile();

    controller = module.get<ListExtraController>(ListExtraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
