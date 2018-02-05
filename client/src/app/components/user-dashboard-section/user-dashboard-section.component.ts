import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.getTotalCost();
  }

  getTotalCost(){
   
    for (var cos of this.user.food_ordered){
      this.totalCost+= parseFloat(cos.cost);
   }
   
  }

}
