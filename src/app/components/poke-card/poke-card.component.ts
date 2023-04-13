import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent{
  @Input() pokeList?: Pokemon[];

  constructor(private router: Router){}

  openPokemonDetailsCard(pokemon: Pokemon){
    this.router.navigateByUrl("/pokemonDetails", {
      state: {pokemon: pokemon}
    });
  }
}


