import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public cars: any = []

  public date = new Date()
  constructor(private CarsList: CarsService) { }

  ngOnInit(): void {
    this.CarsList.getCars().subscribe(response => {
      this.cars = response
    });
  }

}
