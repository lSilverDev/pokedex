import { Component, EventEmitter, Output } from '@angular/core';
import { Species } from 'src/app/models/pokemon';
import { PokeServiceService } from 'src/app/service/poke-service.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent {
  typeList = [];
  @Output() emitType = new EventEmitter();

  constructor(private service: PokeServiceService){}

  ngOnInit(){
    this.service.getTypes().subscribe((list) => {
      console.log(list.results);
      this.typeList = list.results;
    });
  }

  filterType(type: Species){
    this.emitType.emit(type);
  }
}

