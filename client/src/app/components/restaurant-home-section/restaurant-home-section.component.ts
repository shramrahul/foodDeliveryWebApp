import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../../services/restaurant/restaurant-service.service';
import { UserServiceService } from '../../services/user/user-service.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-home-section',
  templateUrl: './restaurant-home-section.component.html',
  styleUrls: ['./restaurant-home-section.component.css']
})
export class RestaurantHomeSectionComponent implements OnInit {
  
  private restaurant;
  private user: any;
  cart=[];
  total:number;
  deliveryCharge: number=5;
  reviews :Array<{}>=[]
  reviewForm: FormGroup;
  currentReview;


  constructor( private restaurantService: RestaurantServiceService,
            private userService :UserServiceService,
            private formBuilder: FormBuilder
          ) {

    this.cart=[]; 
    this.total=5;

    this.reviewForm= formBuilder.group({
      'review':["", [Validators.required]]
    });
    
    this.reviewForm.statusChanges.subscribe();
    
    this.currentReview={
      "user":"", 
      "restaurant_id":"", 
      "review":"",
      "date":""
    }

    this.reviews=[
      {"user":"Shreedhar", 
        "restaurant_id":"23456", 
        "review":"this is the best resurant ever seen in the town",
        "date":"10/10/2017"
      },
      {"user":"suman", 
        "restaurant_id":"898778", 
        "review":"cool food and i loved it",
        "date":"10/10/2017"
      }
    ]
  
  }

 

  


  

  addToCart(food){
    console.log("adding in cart"+food)
            setTimeout(() => {
              this.cart.push(food);
              this.total+=food.price;
            }, 500);
  }

  
  removeFromCart(f){
    for(var food of this.cart){
      if(f.id==food.id) {
        setTimeout(() => {
          this.cart.splice(this.cart.indexOf(food),1);
              this.total-=food.price; 
        }, 500);
        break;    
      }
    }
  }



  ngOnInit() {
    this.restaurantService.pushedData.subscribe(data=> this.restaurant=data );
    this.restaurantService.getRestaurant();
    console.log(this.restaurant)
    this.userService.pushedData.subscribe(data=> this.user= data);
    this.userService.getUser();
  }


  onReviewPost(){

    this.currentReview.review= this.reviewForm.value.review;
    this.currentReview.user=this.user.name;
    this.currentReview.restaurant_id= this.restaurant.name;
    this.currentReview.date= new Date();


      setTimeout(() => {
        
        this.reviews.push(this.currentReview);
        console.log(this.reviews)
      }, 1000);
      
  }

  onCheckout(){

   
    console.log("before adding order"+this.user.food_ordered)

    for (var order of this.cart){

      var food_ordered={
        date : Date.now(),
        food: order,
        restaurant_used: this.restaurant.name
       
      }

      this.user.food_ordered.push(food_ordered);
    }
    
      this.userService.pushData(this.user);
      console.log("after adding order"+this.user.food_ordered)
  }

}
