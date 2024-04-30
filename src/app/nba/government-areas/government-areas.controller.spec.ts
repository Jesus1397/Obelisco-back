import { Test, TestingModule } from '@nestjs/testing';
import { GovernmentAreasController } from './government-areas.controller';

describe('GovernmentAreasController', () => {
  let controller: GovernmentAreasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GovernmentAreasController],
    }).compile();

    controller = module.get<GovernmentAreasController>(
      GovernmentAreasController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
