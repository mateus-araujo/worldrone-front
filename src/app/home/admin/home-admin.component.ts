import { User } from './../../compartilhado/models/user.model';
import { UserService } from './../../compartilhado/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  users: Array<User>;
  show_users: boolean;

  constructor(
    private userService: UserService
  ) {
    this.show_users = false;

    this.userService.getUsers().then(
      (users: Array<User>) => {
        this.users = [];
        for (let i = 0; i < users.length; i++) {
          if (users[i].nivel === 2) {
            this.users.push(users[i]);
          }
        }
      }
    );
  }

  ngOnInit() {
  }

  showUsers() {
    this.show_users = !this.show_users;
  }

}
