import { AlugaDrone } from './../../compartilhado/models/aluga-drone.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-aluga-drone',
  templateUrl: './show-aluga-drone.component.html',
  styleUrls: ['./show-aluga-drone.component.css']
})
export class ShowAlugaDroneComponent implements OnInit {

  @Input() alugaDrones: Array<AlugaDrone>;

  constructor(
  ) { }

  ngOnInit() {
  }

}
