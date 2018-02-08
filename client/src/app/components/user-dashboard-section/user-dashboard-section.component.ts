import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {FormBuilder} from '@angular/forms';
import {UtilService} from '../../services/util.service';
import { UserServiceService } from '../../services/user/user-service.service';

@Component({
  selector: 'app-user-dashboard-section',
  templateUrl: './user-dashboard-section.component.html',
  styleUrls: ['./user-dashboard-section.component.css']
})
export class UserDashboardSectionComponent implements OnInit {

   totalCost ;
   totalOrders;

  // user={
  //   id: 1,
  //   name:{
  //     firstname: "shreeram",
  //     lastname: "chaulagain"
  //     },
  //   address:{
  //     building:"1000N",
  //     street:"4th Street",
  //     district:"fairfield",
  //     zipcode: "",
  //     coord:[
  //       {lati:123.23,
  //       long:12.2345}
  //       ]
  //     },
  //   credentials:{
  //     username: "shramshram",
  //     password: "shamshram",
  //     email:	"shreeamchaulagain@gmai.com"
  //     },

  //   food_ordered:[
  //           {
  //             date:"2017/13/14",
  //             food: {"id":1007,"name":"Borsch ","cuisine":"Ukraine","price":30},
  //             restaurant_id: 12345,
  //             cost:"20"
  //           },
  //           {
  //             date:"2017/13/14",
  //             food: {"id":1007,"name":"Borsch ","cuisine":"Ukraine","price":30},
  //             restaurant_id: 56784,
  //             cost:"20"
  //           },
  //           {
  //             date:"2017/13/14",
  //             food: {"id":1007,"name":"Borsch ","cuisine":"Ukraine","price":30},
  //             restaurant_id: 34567,
  //             cost:"20"
  //           }
  //       ]

  // }

  user;
  constructor(private myHttpService: UtilService,
              private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService,
            private userService: UserServiceService) {
                this.totalCost=0;
                this.totalOrders=0;

                 this.user=userService.currentUser;
                // console.log("dashboard------"+this.user)
                // userService.pushedData.subscribe(data=>this.user=data);
                //  this.userService.getUser();
              }


/**
 * firstly, this method subscribs to the pushedData variable of the userService then it
 * calls the getUser() method of the UserService.
 *
 * Then it calls the getTotalCosts() of this class where it calculates the total cost of the
 * food in the user object
 *
 */
  ngOnInit() {

    var x = document.getElementById('logoutBtn');
    var y = document.getElementById('loginBtn');
    x.style.display = 'block';
    y.style.display = 'none';

    this.goForDashBoard();
    console.log("**************************************************")
    this.user=this.userService.currentUser;
    this.getTotalCost();
  }


  /**
   * current user object consists of the array of the orders. each order consists
   * of the food that he ordered. so this method calculates the total cost of the food
   * that the user has ordered
   */
  getTotalCost(){
    console.log("her===============================e"+this.user)
    for (var cos in this.user.food_ordered){
      console.log("price="+this.user.food_ordered[cos].food.price)
      this.totalCost+= Number(this.user.food_ordered[cos].food.price);
      this.totalOrders++;
   }
  }

  private goForDashBoard() {
    this.authenticationService.dashboard().subscribe(
      data=>{
        //  this.user=data.json().user;
     this.userService.pushData(data.json().user) ;
      });
  }
}
