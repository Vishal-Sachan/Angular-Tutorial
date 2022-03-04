import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/pages/directives/directives.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DatePipesComponent } from './components/pages/date-pipes/date-pipes.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'form', loadChildren: () => import("./components/pages/user-form/user-form.module").then(m => m.UserFormModule) },
  { path: 'user', loadChildren: () => import("./components/pages/users-api/users.module").then(m => m.UsersApiModule) },
  { path: 'cars', loadChildren: () => import("./components/pages/cars/cars.module").then(m => m.CarsModule) },
  { path: 'directives', component: DirectivesComponent },
  { path: 'date-pipes', component: DatePipesComponent },
  // { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routingComponents = [
//   HomepageComponent,
//   DirectivesComponent,
//   ContactComponent,
//   UsersComponent,
//   AboutComponent,
//   CarsComponent
// ]