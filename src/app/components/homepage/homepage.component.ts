import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  log(x: {}) {
    console.log(x)

  }

  form = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    gender: new FormControl(),
    address: new FormControl(),
    email: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

}
