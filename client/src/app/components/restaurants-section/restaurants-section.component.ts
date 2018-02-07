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
  currentRes;

  constructor(private dbService :DbServiceService,
    private resturantService: RestaurantServiceService) {

  }

  ngOnInit() {
    // this.restaurants= this.resturantService.getTopRestaurants().subscribe((res) => {
    //   if(res == "err" ) {
    //     alert("err")
    //   }else {
    //     this.restaurants = JSON.parse(res._body);

    //   }
    // });
     //this.dbService.pushData()
    console.log("restaurants"+this.resturantService.value);
     this.resturantService.value.subscribe(data=>this.restaurants=data);
    console.log('res: ', this.restaurants);
    //this.restaurants=this.dbService.restaurants;
  }

  onCLick(res){
    // this.resturantService.pushedData.subscribe(data=> this.restaurants= data);
    // this.resturantService.getTopRestaurants();
    this.resturantService.pushData(res);
  }

}
