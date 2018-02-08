import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-services/db-service.service';
//import { Observable } from "rxjs/Rx"
import { RestaurantServiceService } from '../../services/restaurant/restaurant-service.service';


@Component({
  selector: 'app-restaurants-section',
  templateUrl: './restaurants-section.component.html',
  styleUrls: ['./restaurants-section.component.css']
})
export class RestaurantsSectionComponent implements OnInit {

  public restaurants ;
  currentRes;

  /**@author shreeram
   * DBService and RestaurantService are injected in the class through this constructor.
   */
  constructor(private dbService :DbServiceService,
    private resturantService: RestaurantServiceService) {

  }


  /**@author shreeram
   * the collection of the top restaurants is subscribed and assigned to the class variable
   * 
   */
  ngOnInit() {
    // this.restaurants= this.resturantService.getTopRestaurants().subscribe((res) => {
    //   if(res == "err" ) {
    //     alert("err")
    //   }else {
    //     //console.dir("res section->>>>> " +this.restaurants  );
    //     this.restaurants = JSON.parse(res._body);
           
    //   }
    // });

    this.resturantService.getTopRestaurants().subscribe(data=>this.restaurants=data)

     //this.dbService.pushData()
    //console.log("restaurants"+this.resturantService.value);
     //this.resturantService.value.subscribe(data=>this.restaurants=data);
    console.log('res: ', this.restaurants);
    //this.restaurants=this.dbService.restaurants;
  }


  /**@author shreeram
   * @argument res - res is the restaurant object
   * this method accepts the variable res and then it is passed to the pushedData method of 
   * restaurantService. This method is called when the user clicks the particular restaurant
   * from the list of the restaurant.
   */
  onCLick(res){
    // this.resturantService.pushedData.subscribe(data=> this.restaurants= data);
    // this.resturantService.getTopRestaurants();
    this.resturantService.pushData(res);
  }

}
