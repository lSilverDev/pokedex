import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loadmore-btn',
  templateUrl: './loadmore-btn.component.html',
  styleUrls: ['./loadmore-btn.component.css']
})
export class LoadmoreBtnComponent {
  @Input() morePokemons: boolean = false;

  constructor(){}

  ngOnInit(){

  }
}
