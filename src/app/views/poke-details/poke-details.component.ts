import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent {
  pokemon: Pokemon;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.pokemon = nav!.extras!.state!['pokemon'];
  }

  return(){
    this.router.navigateByUrl("/");
  }
}
