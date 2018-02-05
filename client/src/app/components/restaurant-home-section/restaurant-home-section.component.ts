import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-home-section',
  templateUrl: './restaurant-home-section.component.html',
  styleUrls: ['./restaurant-home-section.component.css']
})
export class RestaurantHomeSectionComponent implements OnInit {
  cart=[];
  total:number;
  deliveryCharge: number=5;
  reviews :Array<{}>=[]
  textReview:string=' i am a boy and i liked it ';
 
  constructor() {
    this.cart=[]; 
    this.total=5;

    this.reviews=[
      {"user_id":"123", 
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

 

  foods=[
    {  id: 1001, cuisine:"Italy", name:"Pizza", price: 15},
    {  id: 1002, cuisine:"Nepal", name:"Mo:No", price: 15},
    {  id: 1003, cuisine:"India", name:"tofu", price: 15},
    {  id: 1004, cuisine:"America", name:"Pickle", price: 15}
  ]


  

  addToCart(id){
      for(var food of this.foods){
        if(id===food.id) {
            setTimeout(() => {
              this.cart.push(food);
              this.total+=food.price;
            }, 500);
      }
      }
  }

  
  removeFromCart(id){
    for(var food of this.cart){
      if(id==food.id) {
        setTimeout(() => {
          this.cart.splice(this.cart.indexOf(food),1);
              this.total-=food.price; 
        }, 500);
        break;    
      }
    }
  }

  ngOnInit() {
  }


  onReviewPost(){
      // const rev={
      //   "user_id":"567",
      //   "restaurant_id":"9876",
      //   "review":this.textReview,
      //   date: new Date()

      // }
      // this.reviews.push(rev);
      // console.log(this.reviews)
  }

}
