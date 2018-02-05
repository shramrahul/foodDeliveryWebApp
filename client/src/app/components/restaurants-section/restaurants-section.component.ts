import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-services/db-service.service';
import { Observable } from "rxjs/Rx"


@Component({
  selector: 'app-restaurants-section',
  templateUrl: './restaurants-section.component.html',
  styleUrls: ['./restaurants-section.component.css']
})
export class RestaurantsSectionComponent implements OnInit {

  private restaurants ;
  
  constructor(private dbService :DbServiceService) { 
   
  }

  ngOnInit() {
    // this.dbService.pushedData.subscribe(data=> console.log(data));
    //console.log(this.restaurants);
    this.restaurants=this.dbService.restaurants;
  }

  

}
