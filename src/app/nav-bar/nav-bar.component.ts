import { GlobalService } from './../compartilhado/services/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../compartilhado/services/user.service';
import { window } from 'rxjs/operators/window';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class NavBarComponent implements OnInit {

  cliente: boolean;
  admin: boolean;
  logado: boolean;

  constructor(
    private globalService: GlobalService,
    private userService: UserService,
    private router: Router
  ) {

    this.globalService.checkLogin.subscribe(
      (login: boolean) => this.logado = login
    );

    this.globalService.usuarioTipo.subscribe(
      (tipo: number) => {
        if (tipo === 1) {
          this.cliente = false;
          this.admin = true;
        } else if (tipo === 2) {
          this.admin = false;
          this.cliente = true;
        }
      }
    );
  }

  ngOnInit() {
  }

  sair() {
    this.userService.logout().then();
    location.reload();
    this.router.navigate(['login']);
  }
}
