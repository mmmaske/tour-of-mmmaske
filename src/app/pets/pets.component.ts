import { Component } from '@angular/core';
import { Pet } from './pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
    constructor(private petService: PetService) {}

    selectedPet?: Pet;
    onSelect(pet: Pet): void {
    this.selectedPet = pet;
    }
    pets : Pet[] = [];

    getPets(): void {
        this.pets = this.petService.getPets();
        console.log(this);
    }

    ngOnInit(): void {
        this.getPets();
    }
}
