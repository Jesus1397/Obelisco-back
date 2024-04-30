import { Test, TestingModule } from '@nestjs/testing';
import { GovernmentAreasService } from './government-areas.service';

describe('GovernmentAreasService', () => {
  let service: GovernmentAreasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GovernmentAreasService],
    }).compile();

    service = module.get<GovernmentAreasService>(GovernmentAreasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
