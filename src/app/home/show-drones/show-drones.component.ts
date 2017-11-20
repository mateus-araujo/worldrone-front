import { DroneService } from './../../compartilhado/services/drone.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Drone } from './../../compartilhado/models/drone.model';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-show-drones',
  templateUrl: './show-drones.component.html',
  styleUrls: ['./show-drones.component.css']
})
export class ShowDronesComponent implements OnInit {

  @Input() drones: Array<Drone>;
  msgs: Message[];

  constructor(
    private confirmationService: ConfirmationService,
    private droneService: DroneService
  ) { }

  ngOnInit() {
  }

  removerDrone(id) {
    this.confirmationService.confirm({
      header: 'Remover drone',
      message: 'Deseja mesmo remover este drone?',
      accept: () => {
        this.droneService.deleteDrone(id).then(
          () => {
            this.msgs = [];
            this.msgs = [{
              severity: 'success',
              summary: 'Confirmado',
              detail: 'Drone removido'
            }];

            window.location.reload();
          }, err => {
            this.msgs = [];
            this.msgs = [{
              severity: 'error',
              summary: 'Erro',
              detail: 'Drone não removido'
            }];
          }
        );
      },
      reject: () => {
        this.msgs = [{
          severity: 'info',
          summary: 'Cancelado',
          detail: 'Drone não removido'
        }];
      }
    });
  }

}
