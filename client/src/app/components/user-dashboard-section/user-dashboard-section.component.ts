import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {FormBuilder} from '@angular/forms';
import {UtilService} from '../../services/util.service';

@Component({
  selector: 'app-user-dashboard-section',
  templateUrl: './user-dashboard-section.component.html',
  styleUrls: ['./user-dashboard-section.component.css']
})
export class UserDashboardSectionComponent implements OnInit {

   totalCost ;

  user={
    id: 1,
    name:{
      firstname: "shreeram",
      lastname: "chaulagain"
      },
    address:{
      building:"1000N",
      street:"4th Street",
      district:"fairfield",
      zipcode: "",
      coord:[
        {lati:123.23,
        long:12.2345}
        ]
      },
    credentials:{
      username: "shramshram",
      password: "shamshram",
      email:	"shreeamchaulagain@gmai.com"
      },

    food_ordered:[
            {
              date:"2017/13/14",
              food_id: 1,
              restaurant_id: 12345,
              cost:"20"
            },
            {
              date:"2017/13/14",
              food_id: 2,
              restaurant_id: 56784,
              cost:"20"
            },
            {
              date:"2017/13/14",
              food_id: 3,
              restaurant_id: 34567,
              cost:"20"
            }
        ]

  }
  constructor(private myHttpService: UtilService,
              private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) { }


/**
 * firstly, this method subscribs to the pushedData variable of the userService then it 
 * calls the getUser() method of the UserService.
 *  
 * Then it calls the getTotalCosts() of this class where it calculates the total cost of the 
 * food in the user object  
 * 
 */
  ngOnInit() {
    this.goForDashBoard();
    this.getTotalCost();
<<<<<<< HEAD
  
=======
>>>>>>> 2e9eaa0ed4766a9195a0fea432abcfa6a2d81c3b
  }


  /**
   * current user object consists of the array of the orders. each order consists
   * of the food that he ordered. so this method calculates the total cost of the food
   * that the user has ordered 
   */
  getTotalCost(){
<<<<<<< HEAD
    for (var cos in this.user.food_ordered){
      this.totalCost+= (this.user.food_ordered[cos].food.price);
      this.totalOrders++;
=======

    for (var cos of this.user.food_ordered){
      this.totalCost+= parseFloat(cos.cost);
>>>>>>> 2e9eaa0ed4766a9195a0fea432abcfa6a2d81c3b
   }
  }

  private goForDashBoard() {
    this.authenticationService.dashboard().subscribe(()=>{

    })
  }
}
