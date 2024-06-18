import { Component } from '@angular/core';
import { Pet } from './pet';
import { PETS } from '../mock-pets';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
    selectedPet?: Pet;
    onSelect(pet: Pet): void {
    this.selectedPet = pet;
    }
    pets = PETS;
}
