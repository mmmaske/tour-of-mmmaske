import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pet } from '../pets/pet';
import { PetService } from '../pet.service';
import Swal from 'sweetalert2';

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
        console.log(this.route.snapshot.paramMap.getAll('test')); // should return :test value in app-routing-module.ts
        const id = String(this.route.snapshot.paramMap.get('id'));
        this.petService.getPetFromAPI(id)
          .subscribe(pet => this.pet = pet);
      }

      save(): void {
        if (this.pet) {
          this.petService.updatePet(this.pet)
            .subscribe(
                () => this.confirmSave()
            );
        }
      }

      confirmSave(): void {
        Swal.fire('You did it!', 'Data saved successfully.', 'success');
        this.goBack();
      }

      goBack(): void {
        this.location.back();
      }
}
