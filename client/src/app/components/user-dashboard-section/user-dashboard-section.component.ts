import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user/user-service.service';

@Component({
  selector: 'app-user-dashboard-section',
  templateUrl: './user-dashboard-section.component.html',
  styleUrls: ['./user-dashboard-section.component.css']
})
export class UserDashboardSectionComponent implements OnInit {
 
   totalCost:number;
   totalOrders: number;
  
   user:any;
  
  constructor(private userService: UserServiceService) {
   
    this.totalCost =0 ;
    this.totalOrders =0;
   
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
    
     this.userService.pushedData.subscribe(data=>this.user=data)
     this.userService.getUser();
    
      //this.user =this.userService.user;
      console.log(this.user)
    this.getTotalCost();
  
  }


  /**
   * current user object consists of the array of the orders. each order consists
   * of the food that he ordered. so this method calculates the total cost of the food
   * that the user has ordered 
   */
  getTotalCost(){
    for (var cos in this.user.food_ordered){
      this.totalCost+= (this.user.food_ordered[cos].food.price);
      this.totalOrders++;
   }
   
  }



}
