import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {routes} from './app.route';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { NewsAndEventsSectionComponent } from './components/news-and-events-section/news-and-events-section.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SearchSectionComponent,
    RegisterComponent,
    LoginComponent,
    IntroSectionComponent,
    NewsAndEventsSectionComponent,
    WelcomeSectionComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
