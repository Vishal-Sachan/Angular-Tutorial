import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDbComponent } from './user-db.component';

const routes: Routes = [
  { path: 'show', component: UserDbComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDbRoutingModule { }
