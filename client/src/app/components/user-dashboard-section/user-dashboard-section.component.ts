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

  ngOnInit() {
    
     this.userService.pushedData.subscribe(data=>this.user=data)
     this.userService.getUser();
    
      //this.user =this.userService.user;
      console.log(this.user)
    this.getTotalCost();
   
  
  }

  getTotalCost(){
   
    
    for (var cos in this.user.food_ordered){
      this.totalCost+= (this.user.food_ordered[cos].food.price);
      this.totalOrders++;
   }
   
  }



}
