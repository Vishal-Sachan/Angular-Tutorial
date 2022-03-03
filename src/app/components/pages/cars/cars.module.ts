import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { CarsService } from 'src/app/services/cars.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CarsService
  ]
})

export class CarsModule { }
console.log("cars module loaded")