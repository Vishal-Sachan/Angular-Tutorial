import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './users/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url: string = "https://reqres.in/api/users";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this._url);
  }
}
