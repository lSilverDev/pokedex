import { Component } from '@angular/core';
import { PokeServiceService } from 'src/app/service/poke-service.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent {
  typeList = [];

  constructor(private service: PokeServiceService){}

  ngOnInit(){
    this.service.getTypes().subscribe((list) => {
      console.log(list.results);
      this.typeList = list.results;
    });
  }
}
