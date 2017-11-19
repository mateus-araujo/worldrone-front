import { UserService } from './user.service';
import { User } from './../models/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  private tipo_usuario = new BehaviorSubject<number>(1);
  usuarioTipo = this.tipo_usuario.asObservable();

  private logado = new BehaviorSubject<boolean>(false);
  checkLogin = this.logado.asObservable();

  constructor(
    private userService: UserService
  ) {
    this.userService.checkLogin().then(
      (user: User) => {
        this.updateLogado(true);
        this.updateTipoUsuario(user.nivel);
      }, err => {
        console.log('User not connected');
      }
    );
  }

  updateTipoUsuario(user: number) {
    this.tipo_usuario.next(user);
  }

  updateLogado(login: boolean) {
    this.logado.next(login);
  }
}
