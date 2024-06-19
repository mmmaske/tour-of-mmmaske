import { Component } from '@angular/core';
import { Pet } from '../pets/pet';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petform',
  templateUrl: './petform.component.html',
  styleUrls: ['./petform.component.css']
})
export class PetformComponent {
    constructor(
        private petService: PetService,
        private router: Router,
    ) {}

    pets : Pet[] = [];

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.petService.addPet({ name } as Pet)
          .subscribe(pet => {
            this.pets.push(pet);
            this.router.navigate(['/pets']);
          });
      }
}
