import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { DashComponent } from './dash/dash.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'dash', component: DashComponent },
  { path: 'detail/:id', component: PetDetailComponent },
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }