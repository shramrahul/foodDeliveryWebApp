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


 

  onClickTopRestaurant(){
     this.restaurantService.pushData(this.restaurantService.getTopRestaurants());
  }

}
