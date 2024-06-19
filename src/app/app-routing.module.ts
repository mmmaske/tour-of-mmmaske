import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { DashComponent } from './dash/dash.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'dash', component: DashComponent },
  { path: 'detail/:id', component: PetDetailComponent },
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }