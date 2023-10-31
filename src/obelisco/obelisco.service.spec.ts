import { Test, TestingModule } from '@nestjs/testing';
import { ObeliscoService } from './obelisco.service';

describe('ObeliscoService', () => {
  let service: ObeliscoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObeliscoService],
    }).compile();

    service = module.get<ObeliscoService>(ObeliscoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
