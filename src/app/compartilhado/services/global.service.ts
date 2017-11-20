import { UserService } from './user.service';
import { User } from './../models/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  private logado = new BehaviorSubject<boolean>(false);
  checkLogin = this.logado.asObservable();

  private tipo_usuario = new BehaviorSubject<number>(2);
  usuarioTipo = this.tipo_usuario.asObservable();

  private id_usuario = new BehaviorSubject<number>(1);
  usuarioId = this.id_usuario.asObservable();

  constructor(
    private userService: UserService
  ) {
    this.userService.checkLogin().then(
      (user: User) => {
        this.updateLogado(true);
        this.updateTipoUsuario(user.nivel);
        this.updateId(user.id);
      }, err => {
        console.log('User not connected');
      }
    );
  }

  updateLogado(login: boolean) {
    this.logado.next(login);
  }

  updateTipoUsuario(tipo: number) {
    this.tipo_usuario.next(tipo);
  }

  updateId(id: number) {
    this.id_usuario.next(id);
  }
}
