import {Component, OnInit} from '@angular/core';
import {DbServiceService} from '../../services/db-services/db-service.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {RestaurantServiceService} from '../../services/restaurant/restaurant-service.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router, private restaurantService: RestaurantServiceService) {
  }


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


  onClickTopRestaurant() {
    this.restaurantService.getTopRestaurants();
  }

}
