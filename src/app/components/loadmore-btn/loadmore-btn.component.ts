import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loadmore-btn',
  templateUrl: './loadmore-btn.component.html',
  styleUrls: ['./loadmore-btn.component.css']
})
export class LoadmoreBtnComponent {

  all = false;

  @Input() morePokemons: boolean = false;
  @Output() loadAll = new EventEmitter();
  @Output() loadMore = new EventEmitter();

  constructor(){}

  loadAllPokemons(){
    this.all = true;
    this.loadAll.emit(this.all);
  }

  loadMorePokemons(){
    if(!this.all){
      this.loadMore.emit(this.all);
    }
  }
}
