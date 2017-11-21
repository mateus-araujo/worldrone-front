import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './../models/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  private logado = new BehaviorSubject<boolean>(false);
  checkLogin = this.logado.asObservable();

  private tipo_usuario = new BehaviorSubject<number>(0);
  usuarioTipo = this.tipo_usuario.asObservable();

  private id_usuario = new BehaviorSubject<number>(0);
  usuarioId = this.id_usuario.asObservable();

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userService.checkLogin().then(
      (user: User) => {
        this.updateLogado(true);
        this.updateTipoUsuario(user.nivel);
        this.updateId(user.id);
      }, err => {
        this.updateLogado(false);
        this.updateTipoUsuario(0);
        this.updateId(0);
        console.log('User not connected');
        this.router.navigate(['login']);
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
