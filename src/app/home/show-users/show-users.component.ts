import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../compartilhado/models/user.model';
import { DroneService } from '../../compartilhado/services/drone.service';
import { Message } from 'primeng/components/common/message';
import { UserService } from '../../compartilhado/services/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  @Input() users: Array<User>;
  msgs: Message[];

  constructor(
    private confirmationService: ConfirmationService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  removerUsuario(id) {
    this.confirmationService.confirm({
      header: 'Remover usuario',
      message: 'Deseja mesmo remover este usuário?',
      accept: () => {
        this.userService.deleteUser(id).then(
          () => {
            this.msgs = [];
            this.msgs = [{
              severity: 'success',
              summary: 'Confirmado',
              detail: 'Usuário removido'
            }];

            window.location.reload();
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
          detail: 'Usuário não removido'
        }];
      }
    });
  }

}
