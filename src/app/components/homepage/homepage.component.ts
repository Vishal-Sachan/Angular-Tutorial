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

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*')
    ]),
    lastName: new FormControl('', [
      Validators.pattern('[a-zA-Z]*'),
      Validators.maxLength(10)
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*')

    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('[0-9]*')
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9 ]*')
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ])
  })

  get firstName() {
    return this.form.get('firstName')
  }
  get lastName() {
    return this.form.get('lastName')
  }
  get address() {
    return this.form.get('address')
  }
  get phone() {
    return this.form.get('phone')
  }
  get email() {
    return this.form.get('email')
  }
  get age() {
    return this.form.get('age')
  }
  get gender() {
    return this.form.get('gender')
  }


  constructor() { }

  ngOnInit(): void {
  }

}
