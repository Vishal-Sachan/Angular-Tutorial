import { Component, OnInit } from '@angular/core';
import { Iusers } from '../about/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Iusers[] = []

  constructor(private UsersList: UsersService) { }

  ngOnInit(): void {
    this.UsersList.getUsers().subscribe(response => {
      this.users = response.data
      console.log(this.users)
    });
  }

}
