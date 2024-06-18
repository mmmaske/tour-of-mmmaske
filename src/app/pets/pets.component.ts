import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { PetService } from '../pet.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
    constructor(private petService: PetService, private messageService: MessageService) {}

    selectedPet?: Pet;
    pets : Pet[] = [];

    onSelect(pet: Pet): void {
        this.selectedPet = pet;
        this.messageService.add(`PetsComponent: Selected pet id=${pet.id}`);
    }

    getPets(): void {
        this.petService.getPets()
            .subscribe(pets => this.pets = pets);
      }

    ngOnInit(): void {
        this.getPets();
    }
}
