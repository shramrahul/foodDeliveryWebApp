import { Injectable,EventEmitter } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Injectable()
export class DbServiceService {
 user;
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
  constructor(private authenticationService: AuthenticationService) {

  }

  pushData(){
    this.pushedData.emit( this.restaurants);
  }
   
  
  getTheCurrentSessionOfLoggedUser(){
    this.authenticationService.dashboard().subscribe(data=>{
      console.log("user in dbService "+data.json().user)
      this.pushedData.emit( data.json().user )
    });
     // return this.user;
  }




  getAllTopResturants(){
    return this.restaurants;
  }

}
