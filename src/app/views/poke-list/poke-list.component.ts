import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { pokemonInfo } from 'src/app/models/pokemonInfo';
import { PokeServiceService } from 'src/app/service/poke-service.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {
  pokeList: pokemonInfo[] = [];
  pokemonListPath: Pokemon[] = [];
  subscription: Subscription = new Subscription;
  offset: number = 20;
  limit: number = 20;
  morePokemons: boolean = true;


  constructor(private service: PokeServiceService){}

  ngOnInit(){
    this.getPokemonList();
  }

  getPokemonList(){
    this.subscription = this.service.getPokemons(this.limit, this.offset).subscribe({
      next: (urls) => {
        this.pokemonListPath.push(...urls.results);
        this.getDetails(this.pokemonListPath);
      },
      error: erro => console.error(erro),
    });
  }

  getDetails(pokemonList: any){
    pokemonList.forEach((element: { url: string; }) => {
      this.service.getPokemonDetails(element.url).subscribe((pokemon) => {
        console.log(pokemon);
        this.pokeList.push(pokemon);
      });
    });
  }

  loadMorePokemons(){
    this.limit += 20;
    this.offset += 20;

    this.service.getPokemons(this.limit, this.offset).subscribe({
      next: (urls) => {
        this.pokemonListPath.push(...urls.results);
        this.pokeList = [];
        if(this.pokemonListPath.length == 10000){
          this.morePokemons = false;
        }
        this.getDetails(this.pokemonListPath);
      },
      error: erro => console.error(erro),
    });
  }

  filterType(type: string){
    console.log(type);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
