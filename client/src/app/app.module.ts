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
import { DownloadAppSectionComponent } from './components/download-app-section/download-app-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { RestaurantsSectionComponent } from './components/restaurants-section/restaurants-section.component';
import { RestaurantHomeSectionComponent } from './components/restaurant-home-section/restaurant-home-section.component';
import { HomeBodySectionComponent } from './components/home-body-section/home-body-section.component';
import { UserDashboardSectionComponent } from './components/user-dashboard-section/user-dashboard-section.component';
import { DbServiceService } from './services/db-services/db-service.service';

import {UtilService} from './services/util.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './services/authentication.service';
import {HttpModule} from '@angular/http';
import { RestaurantServiceService } from './services/restaurant/restaurant-service.service';
import { UserServiceService } from './services/user/user-service.service';


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
    WelcomeSectionComponent,
    DownloadAppSectionComponent,
    FooterSectionComponent,
    RestaurantsSectionComponent,
    RestaurantHomeSectionComponent,
    HomeBodySectionComponent,
    UserDashboardSectionComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
 
  providers: [UtilService,
    AuthenticationService,
    DbServiceService, 
    RestaurantServiceService, 
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
