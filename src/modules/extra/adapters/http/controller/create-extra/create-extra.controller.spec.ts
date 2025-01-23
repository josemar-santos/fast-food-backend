import { Test, TestingModule } from '@nestjs/testing';
import { CreateExtraController } from './create-extra.controller';

describe('CreateExtraController', () => {
  let controller: CreateExtraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateExtraController],
    }).compile();

    controller = module.get<CreateExtraController>(CreateExtraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
