import { Injectable } from '@nestjs/common';
import { Animal } from './animal.model';
import { Species } from './animal.type';

const ANIMALS: Animal[] = [
  { name: 'Buddy', species: Species.Dog, age: 3 },
  { name: 'Whiskers', species: Species.Cat, age: 5 },
  { name: 'Dumbo', species: Species.Elephant, age: 10 },
  { name: 'Simba', species: Species.Lion, age: 2 },
  { name: 'Pippin', species: Species.Penguin, age: 1 },
  { name: 'Max', species: Species.Dog, age: 4 },
  { name: 'Mittens', species: Species.Cat, age: 7 },
  { name: 'Tantor', species: Species.Elephant, age: 15 },
  { name: 'Nala', species: Species.Lion, age: 3 },
  { name: 'Chilly', species: Species.Penguin, age: 2 },
  { name: 'Red Eyes', species: Species.Snake, age: 2 },
];

@Injectable()
export class AnimalDao {
  getAllAnimals() {
    return ANIMALS;
  }

  getAnimalByName(name: string) {
    const results = ANIMALS.filter((animal) => animal.name === name);
    if (results.length === 0)
      throw new Error(`Animal with name ${name} not found`);
    return results[0];
  }

  getAnimalsBySpecies(species: Species) {
    return ANIMALS.filter((animal) => animal.species === species);
  }

  addAnimal(animal: Animal) {
    ANIMALS.push(animal);
  }

  updateAnimal(id: number, updatedAnimal: Animal) {
    if (id >= ANIMALS.length) throw new Error(`Animal not found`);
    ANIMALS[id] = updatedAnimal;
  }
}
