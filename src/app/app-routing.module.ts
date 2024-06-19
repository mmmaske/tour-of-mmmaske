import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { DashComponent } from './dash/dash.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { Page404Component } from './page404/page404.component';
import { PetformComponent } from './petform/petform.component';

const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'dash', component: DashComponent },
  { path: 'add', component: PetformComponent },
  { path: 'detail/:id', component: PetDetailComponent },
  { path: 'detail/:id/:test', component: PetDetailComponent }, // test route parameter map
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }