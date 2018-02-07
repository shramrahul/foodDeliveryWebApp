import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-services/db-service.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RestaurantServiceService } from '../../services/restaurant/restaurant-service.service';
import { EventEmitter } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private dbService:DbServiceService,
     private restaurantService: RestaurantServiceService,
      private authenticationService: AuthenticationService,
      private router:Router
    ) { }

  ngOnInit() {
  }

  OnLogout() {
   //  var x = document.getElementById('logoutBtn');
   //  //var y = document.getElementById('loginBtn');
   //  x.style.display = 'none';
   // // y.style.display = 'block';
    this.authenticationService.logout();
    this.router.navigate(['/login']);

  }



  onClickTopRestaurant(){
     this.restaurantService.pushData(this.restaurantService.getTopRestaurants());
  }

}
