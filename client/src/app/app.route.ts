import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import { RestaurantsSectionComponent } from './components/restaurants-section/restaurants-section.component';
import { UserDashboardSectionComponent } from './components/user-dashboard-section/user-dashboard-section.component';
import { Component } from '@angular/core/src/metadata/directives';

const MY_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'restaurants', component:RestaurantsSectionComponent},
  {path:'profile/:id', component: UserDashboardSectionComponent},
  {path:'restaurants',component : RestaurantsSectionComponent},
  {path:'restaurant/:id', component :RestaurantsSectionComponent}
]
export const routes = RouterModule.forRoot(MY_ROUTES);
