import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { PetService } from '../pet.service';

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
        console.log(JSON.stringify(this.pets));
    }

    ngOnInit(): void {
        this.getPets();
    }
}
