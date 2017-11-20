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
    private userService: UserService,
    private router: Router
  ) {
    this.globalService.checkLogin.subscribe(
      (login: boolean) => this.checkLogin = login);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    if (this.checkLogin) {
      return true;
    }

    // this.router.navigate(['login']);
    return false;
  }

}
