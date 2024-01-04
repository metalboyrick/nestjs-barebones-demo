import { Test, TestingModule } from '@nestjs/testing';
import { AnimalService } from './animal.service';
import { AnimalDao } from './animal.dao';

describe('AnimalService', () => {
  let service: AnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimalService, AnimalDao],
    }).compile();

    service = module.get<AnimalService>(AnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get correct animal', () => {
    expect(service.getNonMammals()[0].name).toBe('Pippin');
  });
});
