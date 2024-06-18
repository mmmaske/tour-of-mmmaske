import { Injectable } from '@angular/core';
import { Pet } from './pets/pet';
import { PETS } from './mock-pets';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor() { }

  getPets(): Pet[] {
    return PETS;
  }
}
