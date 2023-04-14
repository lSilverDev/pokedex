import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { pokemonInfo } from 'src/app/models/pokemonInfo';
import { PokeServiceService } from 'src/app/service/poke-service.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {
  pokeList: pokemonInfo[] = [];
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
        console.log(pokemon);
        this.pokeList.push(pokemon);
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
