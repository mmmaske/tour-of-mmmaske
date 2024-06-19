import { Injectable } from '@angular/core';
import { Pet } from './pets/pet';
import { PETS } from './mock-pets';
import { Observable, ObservedValuesFromArray, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

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
        this.messageService.add(`petService: ${message}`);
    }

    getMockPets(): Pet[] {
        return PETS;
    }

    getPets(): Observable<Pet[]> {
        const pets = of(PETS); // used to get data from mock-pets
        console.log('run getPets');
        this.log('fetched pets from hardcoded mock-pets');
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
        const url = `${this.apiUrl}/${pet.id}`;
        return this.http.put(url, pet, this.httpOptions).pipe(
        tap(_ => this.sweetAlert(`Action completed!`,`updated pet id=${pet.id}`)),
        catchError(this.handleError<any>('updatePet'))
        );
    }

    /** POST: add a new pet to the server */
    addPet(pet: Pet): Observable<Pet> {
        return this.http.post<Pet>(this.apiUrl, pet, this.httpOptions).pipe(
        tap((newPet: Pet) => this.sweetAlert(`Action completed!`,`added pet w/ id=${newPet.id}`)),
        catchError(this.handleError<Pet>('addPet'))
        );
    }

    /** DELETE: delete the pet from the server */
    deletePet(id: string): Observable<Pet> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<Pet>(url, this.httpOptions).pipe(
        tap(_ => this.sweetAlert(`Action completed!`,`deleted pet id=${id}`)),
        catchError(this.handleError<Pet>('deletePet'))
        );
    }

    sweetAlert(title: string, message: string) {
        this.log(message);
        Swal.fire(title, message, "success");
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
