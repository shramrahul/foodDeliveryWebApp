import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../../services/restaurant/restaurant-service.service';
import { UserServiceService } from '../../services/user/user-service.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DbServiceService } from '../../services/db-services/db-service.service';
import {UtilService} from '../../services/util.service';
import {AuthenticationService} from '../../services/authentication.service';


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
               private dbService:DbServiceService ,
            private userService :UserServiceService,
            private formBuilder: FormBuilder,
               private authService: AuthenticationService
          ) {

    this.cart=[];
    this.total=5;
    this.restaurant=restaurantService.value;
    console.log(this.restaurant)

    this.reviewForm= formBuilder.group({
      'review':["", [Validators.required]]
    });

    this.reviewForm.statusChanges.subscribe();

    this.currentReview={
      "username":"",
      "comment":"",
      "rating":"",
    }

    this.reviews=this.restaurant.reviews;

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

    // this.userService.pushedData.subscribe(data=> {
    //   console.log("user in restaurant home >"+data)
    //   this.user= data});
    // this.userService.getUser();

    this.dbService.pushedData.subscribe(data=> {
      console.log("user in restaurant home >"+data)
      this.user= data});
    this.dbService.getTheCurrentSessionOfLoggedUser();

  }


  onReviewPost(){

    this.currentReview.comment= this.reviewForm.value.review;
    this.currentReview.username=this.user.username;
    this.currentReview.rating=3.5;


      setTimeout(() => {

        this.reviews.push(this.currentReview);
        console.log(this.reviews)
      }, 1000);

  }

  onCheckout(){
    //console.log("inside checkout")
   this.userService.pushData(this.user);
   // console.log("before adding order"+this.user.food_ordered)

    for (var order of this.cart){

      var food_ordered={
        date : Date.now(),
        food: order,
        restaurant_used: this.restaurant.name

      }
      this.user.food_ordered.push(food_ordered);
    }
      this.userService.pushData(this.user);
      this.userService.saveUser(this.user).subscribe(next=>{
        console.dir(next);
      });
      //   this.authService.saveUser(this.user).subscribe(next=>{
      //     console.dir(next);
      //   });
      // this.restaurantService.saveRestaurant(this.restaurant);
     // console.log("after adding order"+this.user.food_ordered)
  }

}
