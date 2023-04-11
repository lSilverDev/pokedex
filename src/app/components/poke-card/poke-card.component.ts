import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokeServiceService } from 'src/app/service/poke-service.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnDestroy{
  pokeList: any = [];
  subscription: Subscription = new Subscription;

  constructor(private service: PokeServiceService){}

  ngOnInit(){
    this.getPokemonList();
  }

  getPokemonList(){
    this.subscription = this.service.getPokemons().subscribe({
      next: (urls) => {
        let pokemonList = urls.results;
        this.getDetails(pokemonList);
      },
      error: erro => console.error(erro),
    });
  }

  getDetails(pokemonList: any){
    pokemonList.forEach((element: { url: string; }) => {
      this.service.getPokemonDetails(element.url).subscribe((pokemon) => {
        this.doPokemon(pokemon)
      });
    });
  }

  doPokemon(pokeDetails: Pokemon){
    let pokemon = {
      abilities: pokeDetails.abilities,
      base_experience: pokeDetails.base_experience,
      forms: pokeDetails.forms,
      game_indices: pokeDetails.game_indices,
      height: pokeDetails.height,
      held_items: pokeDetails.held_items,
      id: pokeDetails.id,
      is_default: pokeDetails.is_default,
      location_area_encounters: pokeDetails.location_area_encounters,
      moves: pokeDetails.moves,
      name: pokeDetails.name,
      order: pokeDetails.order,
      past_types: pokeDetails.past_types,
      species: pokeDetails.species,
      sprites: pokeDetails.sprites,
      stats: pokeDetails.stats,
      types: pokeDetails.types,
      weight: pokeDetails.weight
    }

    this.pokeList.push(pokemon);
  }

  openPokemonDetailsCard(){

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}


