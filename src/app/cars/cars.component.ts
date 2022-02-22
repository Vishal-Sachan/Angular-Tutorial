import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Icars } from './cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public cars: Icars[] = []

  constructor(private CarsList: CarsService) { }

  ngOnInit(): void {
    this.CarsList.getCars().subscribe(response => {
      this.cars = response
      console.log(this.cars)
    });
  }

}
