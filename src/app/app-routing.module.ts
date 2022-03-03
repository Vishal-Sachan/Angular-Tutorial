import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './components/Homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'form', loadChildren: () => import("./components/user-form/user-form.module").then(m => m.UserFormModule) },
  { path: 'users', loadChildren: () => import("./components/users-api/users-api.module").then(m => m.UsersApiModule) },
  { path: 'cars', loadChildren: () => import("./components/cars/cars.module").then(m => m.CarsModule) },
  { path: 'directives', component: DirectivesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
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