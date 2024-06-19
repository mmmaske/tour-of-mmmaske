import { Injectable } from '@angular/core';
import { Pet } from './pets/pet';
import { PETS } from './mock-pets';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class PetService {

    constructor(private messageService: MessageService) { }

    getMockPets(): Pet[] {
        return PETS;
    }

    getPets(): Observable<Pet[]> {
        const pets = of(PETS);
        this.messageService.add('petService: fetched pets');
        return pets;
    }

    getPet(id: string): Observable<Pet> {
        // For now, assume that a hero with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        const pet = PETS.find(h => h.id === id)!;
        this.messageService.add(`PetService: fetched pet id=${id}`);
        return of(pet);
      }
}
