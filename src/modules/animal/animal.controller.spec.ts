import { Test, TestingModule } from '@nestjs/testing';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { AnimalDao } from './animal.dao';

describe('AnimalController', () => {
  let controller: AnimalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimalService, AnimalDao],
      controllers: [AnimalController],
    }).compile();

    controller = module.get<AnimalController>(AnimalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
