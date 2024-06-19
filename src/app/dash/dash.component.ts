import { Component, OnInit } from '@angular/core';
import { Pet } from '../pets/pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
    constructor(private petService: PetService) {}

    selectedPet?: Pet;
    pets : Pet[] = [];

    ngOnInit(): void {
        this.getPets();
    }

    getPets(): void {
        this.petService.getPets()
        .subscribe(pets => this.pets = pets.slice(0,3))
    }
}
