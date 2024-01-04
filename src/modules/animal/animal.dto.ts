import { Animal } from './animal.model';

export type AnimalResponseDto = Animal;
export type AnimalListResponseDto = Animal[];

export type GetAnimalByNameParamDto = { name: string };
export type AddAnimalBodyDto = Animal;
export type UpdateAnimalBodyDto = Animal;
export type UpdateAnimalParamDto = { id: number };

export type MessageDto = { message: string };
