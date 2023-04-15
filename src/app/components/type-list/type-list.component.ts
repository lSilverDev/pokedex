import { Component, EventEmitter, Output } from '@angular/core';
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

  filterType(type: string){
    this.emitType.emit(type);
  }
}

