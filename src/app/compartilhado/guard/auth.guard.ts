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
    this.userService.checkLogin().then(
      (user: User) => {
        this.globalService.updateLogado(true);
        this.globalService.updateTipoUsuario(user.nivel);
        this.globalService.updateId(user.id);

        this.checkLogin = true;
        console.log('User connected!');
        this.router.navigate(['home']);
      }, err => {
        this.checkLogin = false;
        this.globalService.updateLogado(false);
        this.globalService.updateTipoUsuario(0);
        this.globalService.updateId(0);
        console.log('User not connected...');
        this.router.navigate(['login']);
      }
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    if (this.checkLogin) {
      return true;
    } else if (this.checkLogin === false) {
      this.router.navigate(['login']);
      return false;
    }
  }

}
