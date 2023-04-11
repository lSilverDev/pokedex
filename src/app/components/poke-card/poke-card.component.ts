import { Component } from '@angular/core';
import { PokeServiceService } from 'src/app/service/poke-service.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent {
  pokeList = [];

  constructor(private service: PokeServiceService){}

  ngOnInit(){
    this.getPokemonList();
  }

  getPokemonList(){
    this.service.getPokemons().subscribe((list) => {
      let pokemonList = list.results;
      this.getDetails(pokemonList);
    });
  }

  getDetails(pokemonList: any){
    pokemonList.forEach((element: { url: string; }) => {
      this.service.getPokemonDetails(element.url).subscribe((pokemon) => {
        this.pokeList = pokemon;
      });
    });
    console.log(this.pokeList);
  }
}


