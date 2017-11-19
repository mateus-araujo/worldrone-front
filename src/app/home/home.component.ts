import { GlobalService } from './../compartilhado/services/global.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  admin: boolean;
  cliente: boolean;

  constructor(
    private globalService: GlobalService
  ) {
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
}
