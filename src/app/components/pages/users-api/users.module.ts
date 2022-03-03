import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersApiRoutingModule } from './users-api-routing.module';
import { UsersApiComponent } from './users-api.component';
import { UsersService } from 'src/app/services/users.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UsersApiComponent
  ],
  imports: [
    CommonModule,
    UsersApiRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersApiModule { }
console.log("Users Module Loaded")