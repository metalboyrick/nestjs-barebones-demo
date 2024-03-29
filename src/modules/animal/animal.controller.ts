import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import {
  AddAnimalBodyDto,
  AnimalListResponseDto,
  MessageDto,
  UpdateAnimalBodyDto,
  UpdateAnimalParamDto,
} from './animal.dto';
import { AuthGuard } from 'src/guards/auth';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  getAllAnimals(): AnimalListResponseDto {
    return this.animalService.getAllAnimals();
  }

  @Post()
  @UseGuards(AuthGuard)
  addAnimal(@Body() body: AddAnimalBodyDto): MessageDto {
    try {
      const { name, species, age } = body;
      this.animalService.addAnimal(name, species, age);
      return { message: 'success' };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  @Patch(':id')
  updateAnimal(
    @Param() param: UpdateAnimalParamDto,
    @Body() body: UpdateAnimalBodyDto,
  ): MessageDto {
    try {
      const { name, species, age } = body;
      this.animalService.updateAnimal(param.id, name, species, age);
      return { message: 'success' };
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
