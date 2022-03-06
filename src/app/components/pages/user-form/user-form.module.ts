import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormComponent } from './user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDBService } from 'src/app/services/user-db.service';


@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserDBService
  ]
})
export class UserFormModule { }
console.log("forms module loaded")
