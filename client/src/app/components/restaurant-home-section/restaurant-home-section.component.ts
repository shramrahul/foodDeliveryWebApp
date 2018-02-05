import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../../services/restaurant/restaurant-service.service';
import { UserServiceService } from '../../services/user/user-service.service';

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
  textReview:string=' i am a boy and i liked it ';
 
  constructor( private restaurantService: RestaurantServiceService,
            private userService :UserServiceService ) {

    this.cart=[]; 
    this.total=5;
    
    

    this.reviews=[
      {"user":"123", 
        "restaurant_id":"23456", 
        "review":"this is the best resurant ever seen in the town",
        "date":"10/10/2017"
      },
      {"user_id":"456", 
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
    
    this.userService.pushedData.subscribe(data=> this.user= data);
    this.userService.getUser();
  }


  onReviewPost(){
      const rev={
        "user_id":this.user.name,
        "restaurant_id":this.restaurant.name,
        "review":this.textReview,
        date: new Date()

      }

      setTimeout(() => {
        
        this.reviews.push(rev);
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
