import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icars } from '../components/cars/cars';


@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private _url: string = environment.carsUrl;
  constructor(private http: HttpClient) { }

  getCars(): Observable<Icars[]> {
    return this.http.get<Icars[]>(this._url);
  }
}
