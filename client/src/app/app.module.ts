import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {routes} from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SearchSectionComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
