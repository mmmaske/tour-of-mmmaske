import { Injectable } from '@angular/core';
import { Pet } from './pets/pet';
import { PETS } from './mock-pets';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PetService {

    constructor(
        // private http: HttpClient,
        private messageService: MessageService
    ) { }

    private log(message: string) {
        this.messageService.add(message);
    }

    getMockPets(): Pet[] {
        return PETS;
    }

    getPets(): Observable<Pet[]> {
        const pets = of(PETS);
        this.log('petService: fetched pets');
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
