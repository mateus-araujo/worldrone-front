import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
    this.cliente = false;
    this.admin = true;
    this.logado = false;
  }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['login']);
  }

  sair() {
    this.logado = false;
  }
}
