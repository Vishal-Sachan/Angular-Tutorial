import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  log(x: {}) {
    console.log(x)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
