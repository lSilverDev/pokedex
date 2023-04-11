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
    this.service.getPokemons().subscribe((list) => {
      let details = list.results;
      // logica de pegar as informaçoes detalhadas dos pokemons
    });
  }
}
