import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDBService {

  public users: any = [];

  private getUrl: string = environment.usersGETUrl;
  private postUrl: string = environment.usersPOSTUrl;
  private deleteUrl: string = environment.usersDELETEUrl;
  constructor(private http: HttpClient) { }

  getUsersData() {
    this.getUsers().subscribe(res => {
      this.users = res
    })
  }

  addUsersData(data: any) {
    this.postUsers(data).subscribe(res => {
      this.users = res
    })
  }

  deleteUsersData(data: any) {
    this.deleteUsers(data).subscribe(res => {
      this.getUsers().subscribe(res => {
        this.users = res
      })
    })
  }

  getUsers() {
    return this.http.get(this.getUrl);
  }
  postUsers(data: any) {
    return this.http.post(this.postUrl, data, { responseType: "text" })
  }
  deleteUsers(data: any) {
    return this.http.post(this.deleteUrl, data, { responseType: "text" })
  }
}
