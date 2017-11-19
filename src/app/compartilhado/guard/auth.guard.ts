import { Observable } from 'rxjs/Rx';
import { User } from './../models/user.model';
import { GlobalService } from './../services/global.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  user: User;
  checkLogin: boolean;

  constructor(
    private globalService: GlobalService,
    private usuarioService: UserService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    this.globalService.checkLogin.subscribe(
      (login: boolean) => this.checkLogin = login);

    if (this.checkLogin) {
      return true;
    }

    return false;
  }

}
