import { Injectable } from '@angular/core';
import { Pet } from './pets/pet';
import { PETS } from './mock-pets';
import { Observable, ObservedValuesFromArray, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PetService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    private apiUrl = 'http://localhost:4201/pets';

    private log(message: string) {
        this.messageService.add(message);
    }

    getMockPets(): Pet[] {
        return PETS;
    }

    getPets(): Observable<Pet[]> {
        const pets = of(PETS); // used to get data from mock-pets
        console.log('run getPets');
        this.log('petService: fetched pets from hardcoded mock-pets');
        return pets;
    }

    getPetsFromAPI(): Observable<Pet[]> {
        const pets = this.http.get<Pet[]>(this.apiUrl).pipe(
            tap(_ => this.log('fetched pets')),
            catchError(this.handleError<Pet[]>('getPets', []))
          );
        return pets;
    }

    getPet(id: string): Observable<Pet> {
        const pet = PETS.find(h => h.id === id)!;
        this.messageService.add(`PetService: fetched pet id=${id}`);
        return of(pet);
    }

    getPetFromAPI(id: string): Observable<Pet> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Pet>(url).pipe(
          tap(_ => this.log(`fetched Pet id=${id}`)),
          catchError(this.handleError<Pet>(`getPet id=${id}`))
        );
      }

    /** PUT: update the pet on the server */
    updatePet(pet: Pet): Observable<any> {
        const urlWithId = this.apiUrl+"/"+pet.id;
        return this.http.put(urlWithId, pet, this.httpOptions).pipe(
        tap(_ => this.log(`updated pet id=${pet.id}`)),
        catchError(this.handleError<any>('updatePet'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);

          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}
