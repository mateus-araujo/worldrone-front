import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../compartilhado/models/user.model';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  @Input() users: Array<User>;

  constructor() { }

  ngOnInit() {
  }

}
