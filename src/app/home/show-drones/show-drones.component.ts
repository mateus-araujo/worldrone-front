import { Drone } from './../../compartilhado/models/drone.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-drones',
  templateUrl: './show-drones.component.html',
  styleUrls: ['./show-drones.component.css']
})
export class ShowDronesComponent implements OnInit {

  @Input() drones: Array<Drone>;

  constructor() { }

  ngOnInit() {
  }

}
