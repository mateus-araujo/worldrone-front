import { GlobalService } from './../../compartilhado/services/global.service';
import { User } from './../../compartilhado/models/user.model';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { AlugaDrone } from './../../compartilhado/models/aluga-drone.model';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { AlugaDroneService } from '../../compartilhado/services/aluga-drone.service';

@Component({
  selector: 'app-show-aluga-drone',
  templateUrl: './show-aluga-drone.component.html',
  styleUrls: ['./show-aluga-drone.component.css']
})
export class ShowAlugaDroneComponent implements OnInit {

  @Input() alugaDrones: Array<AlugaDrone>;
  msgs: Message[];
  user_id: number;

  constructor(
    private confirmationService: ConfirmationService,
    private alugaDroneService: AlugaDroneService,
    private globalService: GlobalService
  ) {
    this.globalService.usuarioId.subscribe(
      (id: number) => this.user_id = id
    );

  }

  ngOnInit() {
  }

  removerAlugaDrone(drone_id, user_id) {
    this.confirmationService.confirm({
      header: 'Remover aluguel',
      message: 'Deseja mesmo este aluguel?',
      accept: () => {
        this.alugaDroneService.deleteAlugaDrone(drone_id, user_id) .then(
          () => {
            this.msgs = [];
            this.msgs = [{
              severity: 'success',
              summary: 'Confirmado',
              detail: 'Aluguel removido'
            }];

            location.reload();
          }, err => {
            this.msgs = [];
            this.msgs = [{
              severity: 'error',
              summary: 'Erro',
              detail: 'Não foi possível remover'
            }];
          }
        );
      },
      reject: () => {
        this.msgs = [{
          severity: 'info',
          summary: 'Cancelado',
          detail: 'Aluguel não removido'
        }];
      }
    });
  }
}
