import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pet } from '../pets/pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent {
    constructor(
        private route: ActivatedRoute,
        private petService: PetService,
        private location: Location
    ) {}
    @Input() pet?: Pet;

    ngOnInit(): void {
        this.getPet();
      }

      getPet(): void {
        const id = String(this.route.snapshot.paramMap.get('id'));
        this.petService.getPetFromAPI(id)
          .subscribe(pet => this.pet = pet);
      }

      save(): void {
        if (this.pet) {
          this.petService.updatePet(this.pet)
            .subscribe(/*() => this.goBack()*/);
        }
      }

      goBack(): void {
        this.location.back();
      }
}
