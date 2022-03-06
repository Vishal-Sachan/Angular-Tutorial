import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDBService } from 'src/app/services/user-db.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(public usersList: UserDBService) { }

  public date = Date.now()

  addUser(data: any) {
    data.dateModified = this.date
    console.log(data)
    this.usersList.addUsersData(data)
  }

  reset() {
    alert("Data Entered Successfully")
    this.form.reset();
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  emailPattern2 = '[a-z0-9]+[@]+[a-z]+[.]+[a-z]*';

  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*')
    ]),
    lastName: new FormControl('', [
      Validators.pattern('[a-zA-Z]*'),
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


  ngOnInit(): void {
  }

}
