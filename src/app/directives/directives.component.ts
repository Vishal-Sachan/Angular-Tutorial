import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public option=true
  public cars=['Hatchback','Sedan','SUV','Sports','Hypercar']

  constructor() { }

  ngOnInit(): void {
  }

}
