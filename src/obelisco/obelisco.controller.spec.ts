import { Test, TestingModule } from '@nestjs/testing';
import { ObeliscoController } from './obelisco.controller';

describe('ObeliscoController', () => {
  let controller: ObeliscoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObeliscoController],
    }).compile();

    controller = module.get<ObeliscoController>(ObeliscoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
