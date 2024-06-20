import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { PetService } from '../pet.service';
import { Observable, ObservedValuesFromArray, of } from 'rxjs';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
    constructor(private petService: PetService) {}

    selectedPet?: Pet;
    pets : Pet[] = [];


    getPets(): void {
        this.petService.getPetsFromAPI()
            .subscribe(pets => this.pets = pets);

        // const petlist = this.petService.fireGetPets();
        console.log('petlist');
        // console.log(petlist);
        console.log(JSON.stringify(this.pets));
    }

    delete(pet: Pet): void {
        this.pets = this.pets.filter(h => h !== pet);
        this.petService.deletePet(pet.id).subscribe();
      }

    ngOnInit(): void {
        this.getPets();
    }
}
