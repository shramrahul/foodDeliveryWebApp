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


  searchedResult;


  searchForm: FormGroup;
  search_key:String;
  currentLatitude;
  currentLongitude;

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
          this.currentLatitude= position.coords.latitude;
          this.currentLongitude=position.coords.longitude;
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
 * when the user inputs the name of the restaurant in the search box and clicks the
 * search button then this method is activated. The aim of this method is to search the 
 * resturant object that he wants to search
 */
  onClickSearch(){
    this.search_key=this.searchForm.value.search_key;
    if(this.search_key===null) return;

    this.restaurantService.getSearchRestaurant(this.search_key).subscribe(
      
      data=>{
        console.dir(data[0].name)
        this.searchedRestaurant=data[0]
      }
    );
    

  }
}
