import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from './users-api';

@Component({
  selector: 'app-users',
  templateUrl: './users-api.component.html',
  styleUrls: ['./users-api.component.css']
})
export class UsersApiComponent implements OnInit {

  public users: Iusers[] = []

  constructor(private UsersList: UsersService) { }

  ngOnInit(): void {
    this.UsersList.getUsers().subscribe(response => {
      this.users = response.data
      console.log(this.users)
    });
  }

}
