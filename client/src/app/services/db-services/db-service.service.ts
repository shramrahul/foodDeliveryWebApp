import { Injectable,EventEmitter } from '@angular/core';


@Injectable()
export class DbServiceService {

  restaurants=
[{
    "_id":"5a6799cb27d7d85aa9198ca4",
    "address":{"building":"2780",
            "coord":[-73.98241999999999,40.579505],
            "street":"Stillwell Avenue",
            "zipcode":"11224"
        },
    "district":"Brooklyn",
    "cuisine":"American ",
    "grades":[{"date":"2014-06-10T00:00:00.000Z","grade":"A","score":5},
              {"date":"2013-06-05T00:00:00.000Z","grade":"A","score":7},
              {"date":"2012-04-13T00:00:00.000Z","grade":"A","score":12},
              {"date":"2011-10-12T00:00:00.000Z","grade":"A","score":12}],
    "name":"Riviera Caterer",
    "restaurant_id":"40356018",
    "foods":[
    {  "id": 1001, "cuisine":"Italy", "name":"Pizza", "price": 145},
    {  "id": 1002, "cuisine":"Newtertpal", "name":"tomo", "price": 1445},
    {  "id": 1003, "cuisine":"Indwerweria", "name":"wrwerwe", "price": 15},
    {  "id": 1004, "cuisine":"asdasd", "name":"afsfasdasd", "price": 154}
  ]
},

{"_id":"5a6799cb27d7d85aa9198caa",
    "address":{
            "building":"8825",
             "coord":[-73.8803827,40.7643124],
             "street":"Astoria Boulevard",
             "zipcode":"11369"
            },
    "district":"Queens",
    "cuisine":"American ",
    "grades":[
        {"date":"2014-11-15T00:00:00.000Z","grade":"Z","score":38},
        {"date":"2014-05-02T00:00:00.000Z","grade":"A","score":10},
        {"date":"2013-03-02T00:00:00.000Z","grade":"A","score":7},
        {"date":"2012-02-10T00:00:00.000Z","grade":"A","score":13}],
    
    "name":"Brunos On The Boulevard",
    "restaurant_id":"40356151",
    
    "foods":[
    {  "id": 1001, "cuisine":"Italy", "name":"Pizza", "price": 15},
    {  "id": 1002, "cuisine":"Nepal", "name":"Mo:No", "price": 15},
    {  "id": 1003, "cuisine":"India", "name":"tofu", "price": 15},
    {  "id": 1004, "cuisine":"America", "name":"Pickle", "price": 15}
  ]
}
]
;

  
 pushedData = new EventEmitter<any>();
  constructor() {

  }

  pushData(){
    this.pushedData.emit( this.restaurants);
  }
   
  
  getTheCurrentSessionOfLoggedUser(){
    var user={
      id: 1,	
      name:"Shreeram Chaulagain",
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
                food: {  "id": 1001, "cuisine":"hello", "name":"Pizza", "price": 15},
                restaurant_used: 12345,
                      
              },
              {
                date:"2017/13/14",
                food: {  "id": 1002, "cuisine":"English", "name":"mom", "price": 15},
                restaurant_used: 56784,
                    
              },
              {
                date:"2017/13/14",
                food: {  "id": 1003, "cuisine":"Nepali", "name":"Tofu", "price": 15} ,
                restaurant_used: 34567,
                      
              }
          ]
        }

        return user;
  }




  getAllTopResturants(){
    return this.restaurants;
  }

}
