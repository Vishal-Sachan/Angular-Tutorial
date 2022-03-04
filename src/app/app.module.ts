import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DirectivesComponent } from './components/pages/directives/directives.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { DatePipesComponent } from './components/pages/date-pipes/date-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DirectivesComponent,
    FooterComponent,
    HomePageComponent,
    DatePipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

