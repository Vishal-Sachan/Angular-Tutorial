import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersService } from './services/users.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarsComponent } from './components/cars/cars.component';
import { UsersComponent } from './components/users/users.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarsService } from './services/cars.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    HomepageComponent,
    CarsComponent,
    UsersComponent,
    DirectivesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService, CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

