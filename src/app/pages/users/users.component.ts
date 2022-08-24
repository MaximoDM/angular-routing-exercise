import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = []

  constructor(private usersService: UsersService) {
    this.usersService.getUsers()
      .then(users => this.users = users);
  }


  ngOnInit(): void {
  }

}
