import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import { RestaurantsSectionComponent } from './components/restaurants-section/restaurants-section.component';

const MY_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'restaurants', component:RestaurantsSectionComponent}
]
export const routes = RouterModule.forRoot(MY_ROUTES);
