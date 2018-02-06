import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RestaurantServiceService } from '../../services/restaurant/restaurant-service.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {



  searchForm: FormGroup;
  search_key:String;

  searchedRestaurant:any;




  constructor(private formBuilder: FormBuilder, 
    private restaurantService:RestaurantServiceService) {
    
    
      this.search_key="";
    this.searchForm= formBuilder.group({
      'search_key':["", [Validators.required]]
    });

    this.searchForm.statusChanges.subscribe();
   
  
  }

  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
         // this.geolocationPosition = position,
          console.log(position.coords.latitude+""+ position.coords.longitude);
          console.log(position)
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    };

  }

 /**
  * this method is used to search the nearby resturants that are available near the current location
  of the user.
  */
  onClickSearchNearBy(){

  }

/**
 * when the user inputs the name of the restaurant in the search box and clicks the
 * search button then this method is activated. The aim of this method is to search the 
 * resturant object that he wants to search
 */
  onClickSearch(){
    this.search_key=this.searchForm.value.search_key;

    this.restaurantService.getSearchRestaurant(this.search_key)

  }

}
