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
  searchPokemonDetail: string = '';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.pokemon = nav!.extras!.state!['pokemon'];
  }

  search(){

  }

  return(){
    this.router.navigateByUrl("/");
  }
}
