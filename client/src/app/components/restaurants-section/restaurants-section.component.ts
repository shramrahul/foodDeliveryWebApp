import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-services/db-service.service';
import { Observable } from "rxjs/Rx"
import { RestaurantServiceService } from '../../services/restaurant/restaurant-service.service';


@Component({
  selector: 'app-restaurants-section',
  templateUrl: './restaurants-section.component.html',
  styleUrls: ['./restaurants-section.component.css']
})
export class RestaurantsSectionComponent implements OnInit {

  private restaurants ;
  
  constructor(private dbService :DbServiceService, 
    private resturantService: RestaurantServiceService) { 
   
  }

  ngOnInit() {
     this.dbService.pushedData.subscribe(data=> this.restaurants=data);
     this.dbService.pushData()
    console.log('res: ', this.restaurants);
    //this.restaurants=this.dbService.restaurants;
  }

  onCLick(res){
    this.resturantService.pushData(res);
  }

}
