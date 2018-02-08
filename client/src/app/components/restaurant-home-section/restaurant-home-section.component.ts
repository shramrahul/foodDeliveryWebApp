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

  public restaurant;
  public user: any;
  cart=[];
  total:number;
  deliveryCharge: number=5;
  reviews :Array<{}>=[]
  reviewForm: FormGroup;
  currentReview;


  /**@author shreeram
   * this constructor injects the various services as dependency injection. it also initiates
   * cart as an empty array, assigns 5 to the total, fetches the value o the vallue varaiable in 
   * restaurant service and assign it in its class variable, restaurant. A dynamic form, reviewForm, is also 
   * initiated here for the review. initiates an empty object current review
   * 
   */

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







/**@author shreeram
 * this function accepts the collection named food and is assigned to the class variable called
 * cart. Also the price in the accepted variable is added in the total.
 */
  addToCart(food){
    console.log("adding in cart"+food)
            setTimeout(() => {
              this.cart.push(food);
              this.total+=food.price;
            }, 500);
  }


/**@author shreeram
 * this function accepts an object of food and it is searched in the collection of the cart 
 * and when it is found then it is removed from the cart. Also the value of the price in the 
 * object is also reducedfrom the total sum.
 */
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


  /**@author shreeram
   * this method subscribes the pushedData from the restaurant service and assigns it to 
   * the class variable called restaurants. getRestaurant() method of restaurantService
   *  is also called here. the currentUser in the userService is also fetched and assigned to its
   * class variable, user. getTheCurrentSessionOfLoggedUser() is also called from dbService. 
   */

  ngOnInit() {
    this.restaurantService.pushedData.subscribe(data=> this.restaurant=data );
    this.restaurantService.getRestaurant();

    // this.userService.pushedData.subscribe(data=> {
    //   console.log("user in restaurant home >"+data)
    //   this.user= data});
    // this.userService.getUser();

    this.user= this.userService.currentUser;
    console.log("user in restaurant home "+this.user)

    this.dbService.pushedData.subscribe(data=> {
      console.log("user in restaurant home >"+data)
      this.user= data});
    this.dbService.getTheCurrentSessionOfLoggedUser();

  }


  /**@author shreeram
   * this method is initiated when the review is submitted. here the form group is transfered to
   * the currentreview object and pushed to the collection of the total review.
   */
  onReviewPost(){

    this.currentReview.comment= this.reviewForm.value.review;
    this.currentReview.username=this.user.username;
    this.currentReview.rating=3.5;


      setTimeout(() => {

        this.reviews.push(this.currentReview);
        console.log(this.reviews)
      }, 1000);

  }

  /**@author shreeram
   * this method is called after checkout buttom is clicked in restaurant Home.
      the current user is sent to the userService. food_ordered object is created here and 
      updated in the food_ordered field of user. user is saved in database through userService.save(this.user)
   */
  onCheckout(){ 
    
    console.log("user->>>"+ this.user)
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
