import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UsersComponent } from './components/users/users.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomepageComponent, DirectivesComponent, ContactComponent, UsersComponent, AboutComponent, CarsComponent]