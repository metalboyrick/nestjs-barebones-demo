import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { AnimalDao } from './animal.dao';

@Module({
  controllers: [AnimalController],
  providers: [AnimalService, AnimalDao],
})
export class AnimalModule {}
