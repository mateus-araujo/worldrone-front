import { User } from './../models/user.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  baseURL: string;

  constructor(private http: Http) {
    this.baseURL = 'http://localhost:8000';
  }

  createUser(user: User) {
    return this.http.post(`${this.baseURL}/user/newlogin`, user)
      .toPromise();
  }

  login(user: User): Promise<User> {
    return this.http.post(`${this.baseURL}/login`, user)
      .toPromise()
      .then(response => response.json());
  }

  logout() {
    return this.http.get(`${this.baseURL}/logout`)
      .toPromise();
  }

  checkLogin(): Promise<User> {
    return this.http.get(`${this.baseURL}/check_login`)
      .toPromise()
      .then(response => response.json());
  }

  getUser(id: number): Promise<User> {
    return this.http.get(`${this.baseURL}/user/${id}`)
      .toPromise()
      .then(response => response.json());
  }
}
