import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDbRoutingModule } from './user-db-routing.module';
import { UserDBService } from 'src/app/services/user-db.service';
import { UserDbComponent } from './user-db.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserDbComponent
  ],
  imports: [
    CommonModule,
    UserDbRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserDBService
  ]
})
export class UserDbModule { }
console.log("User DB Module Loaded")