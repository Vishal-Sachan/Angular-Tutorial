import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icars } from './cars/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private _url: string = "http://localhost:5500/cars";
  constructor(private http: HttpClient) { }

  getCars(): Observable<Icars[]> {
    return this.http.get<Icars[]>(this._url);
  }
}
