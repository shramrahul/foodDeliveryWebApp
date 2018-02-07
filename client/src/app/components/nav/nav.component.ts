import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-services/db-service.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RestaurantServiceService } from '../../services/restaurant/restaurant-service.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  constructor(private dbService:DbServiceService, private restaurantService: RestaurantServiceService ) { }

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  OnLogout() {
   //  var x = document.getElementById('logoutBtn');
   //  //var y = document.getElementById('loginBtn');
   //  x.style.display = 'none';
   // // y.style.display = 'block';
    this.authenticationService.logout();
    this.router.navigate(['/login']);

  }
>>>>>>> 77e5ad2e3abacc6cc88753af8f4b3fde137241c9

 

  onClickTopRestaurant(){
     this.restaurantService.pushData(this.restaurantService.getTopRestaurants());
  }

}
