import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private _url: string = environment.carsUrl;
  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get(this._url);
  }
}
