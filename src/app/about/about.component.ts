import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Iusers } from './users';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public users: Iusers[] = []

  constructor(private UsersList: UsersService) { }

  ngOnInit(): void {
    this.UsersList.getUsers().subscribe(response => {
      this.users = response.data
      console.log(this.users)
    });
  }

}
