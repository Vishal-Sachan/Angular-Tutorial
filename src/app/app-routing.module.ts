import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/pages/directives/directives.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { DatePipesComponent } from './components/pages/date-pipes/date-pipes.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'form', loadChildren: () => import("./components/pages/user-form/user-form.module").then(m => m.UserFormModule) },
  { path: 'users', loadChildren: () => import("./components/pages/user-db/user-db.module").then(m => m.UserDbModule) },
  { path: 'user', loadChildren: () => import("./components/pages/users-api/users.module").then(m => m.UsersApiModule) },
  { path: 'cars', loadChildren: () => import("./components/pages/cars/cars.module").then(m => m.CarsModule) },
  { path: 'directives', component: DirectivesComponent },
  { path: 'date-pipes', component: DatePipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
