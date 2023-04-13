import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './views/poke-list/poke-list.component';
import { PokeDetailsComponent } from './views/poke-details/poke-details.component';

const routes: Routes = [
  {
    path: '',
    component: PokeListComponent,
    pathMatch: 'full'
  },
  {
    path: 'details',
    component: PokeDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
