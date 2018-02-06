import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import { RestaurantsSectionComponent } from './components/restaurants-section/restaurants-section.component';
import { UserDashboardSectionComponent } from './components/user-dashboard-section/user-dashboard-section.component';
import { Component } from '@angular/core/src/metadata/directives';
import { RestaurantHomeSectionComponent } from './components/restaurant-home-section/restaurant-home-section.component';
import {AuthGuard} from './guard/auth.guard';

const MY_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'restaurants', component:RestaurantsSectionComponent},
  {path:'profile', component: UserDashboardSectionComponent, canActivate:[AuthGuard]},
  {path:'restaurants',component : RestaurantsSectionComponent},
  {path:'restaurant-home', component :RestaurantHomeSectionComponent}
]
export const routes = RouterModule.forRoot(MY_ROUTES);
