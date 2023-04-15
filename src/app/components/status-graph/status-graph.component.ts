import { Component, Input } from '@angular/core';
import { Stat } from 'src/app/models/pokemon';

@Component({
  selector: 'app-status-graph',
  templateUrl: './status-graph.component.html',
  styleUrls: ['./status-graph.component.css']
})
export class StatusGraphComponent {
  @Input() stats: Stat[] = [];
}
