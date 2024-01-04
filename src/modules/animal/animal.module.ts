import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { AnimalDao } from './animal.dao';
import { LoggerMiddleware } from 'src/middlewares/logger';

@Module({
  controllers: [AnimalController],
  providers: [AnimalService, AnimalDao],
})
export class AnimalModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('animal');
  }
}
