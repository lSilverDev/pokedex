import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokeServiceService } from 'src/app/service/poke-service.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent {
  pokemon: Pokemon;
  searchPokemonDetail = new FormControl();

  constructor(private router: Router, private service: PokeServiceService) {
    const nav = this.router.getCurrentNavigation();
    this.pokemon = nav!.extras!.state!['pokemon'];
  }

  pokemonsFinded$ = this.searchPokemonDetail.valueChanges
  .pipe(
    switchMap((search) => this.service.getPokemonByName(search)),
    map(pokemon => this.pokemon = pokemon)
  );

  return(){
    this.router.navigateByUrl("/");
  }
}
