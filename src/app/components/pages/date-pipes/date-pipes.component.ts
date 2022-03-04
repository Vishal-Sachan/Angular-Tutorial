import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipes',
  templateUrl: './date-pipes.component.html',
  styleUrls: ['./date-pipes.component.css']
})
export class DatePipesComponent implements OnInit {

  public date = Date.now()

  constructor() { }

  ngOnInit(): void {
  }

}
