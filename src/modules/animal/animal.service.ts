import { Injectable } from '@nestjs/common';
import { AnimalDao } from './animal.dao';
import { Species } from './animal.type';
import { Animal } from './animal.model';

@Injectable()
export class AnimalService {
  constructor(private readonly animalDao: AnimalDao) {}

  getNonMammals() {
    const penguins = this.animalDao.getAnimalsBySpecies(Species.Penguin);
    const snakes = this.animalDao.getAnimalsBySpecies(Species.Snake);

    return [...penguins, ...snakes];
  }

  getAllAnimals() {
    return this.animalDao.getAllAnimals();
  }

  getAnimalByName(name: string) {
    return this.animalDao.getAnimalByName(name);
  }

  addAnimal(name: string, species: string, age: number) {
    this.animalDao.addAnimal({
      name,
      species,
      age,
    } as Animal);
  }

  updateAnimal(id: number, name: string, species: string, age: number) {
    this.animalDao.updateAnimal(id, {
      name,
      species,
      age,
    } as Animal);
  }
}
