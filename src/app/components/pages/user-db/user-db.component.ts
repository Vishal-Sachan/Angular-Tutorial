import { Component, OnInit } from '@angular/core';
import { UserDBService } from 'src/app/services/user-db.service';

@Component({
  selector: 'app-user-db',
  templateUrl: './user-db.component.html',
  styleUrls: ['./user-db.component.css']
})
export class UserDbComponent implements OnInit {

  log(x: any) {
    alert(`User Deleted`)
    console.log(x)
  }

  deleteData(data: any) {
    console.log("clicked")
    console.log(data)
    return this.usersList.deleteUsersData(data)
  }

  constructor(public usersList: UserDBService) { }

  ngOnInit(): void {
    this.usersList.getUsersData();
  }

}
