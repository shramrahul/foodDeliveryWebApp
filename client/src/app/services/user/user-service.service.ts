import { Injectable, EventEmitter } from '@angular/core';
import { DbServiceService } from '../db-services/db-service.service';
import { AuthenticationService } from '../authentication.service';
import { Http } from '@angular/http';


@Injectable()
export class UserServiceService {

  
   currentUser;
  

  pushedData= new EventEmitter<any>();
  constructor (dbService:DbServiceService,
    private authenticationService: AuthenticationService,
    private http: Http
  ) { 
   
     
      console.log("current user in userservice constructor "+this.currentUser)

  //   this.currentUser={
  //     "_id": {
  //         "$oid": "5a791f806ced6d243c10166c"
  //     },
  //     "address": {
  //         "coord": [
  //             {
  //                 "_id": {
  //                     "$oid": "5a791f806ced6d243c10166d"
  //                 },
  //                 "latitude": 123,
  //                 "longitude": 345
  //             }
  //         ],
  //         "street": "test",
  //         "city": "test",
  //         "state": "test",
  //         "zipcode": "test"
  //     },
  //     "food_ordered": [
  //         {
  //             "food": {
  //                 "id": "123",
  //                 "cuisine": "Nepal",
  //                 "name": "Suman",
  //                 "price": 23
  //             },
  //             "_id": {
  //                 "$oid": "5a791f806ced6d243c10166e"
  //             },
  //             "date": {
  //                 "$date": "1970-01-01T00:00:00.672Z"
  //             },
  //             "restaurant_used": 23
  //         }
  //     ],
  //     "email": "test",
  //     "username": "test",
  //     "password": "$2a$10$jeqRi/ZASUgucZY4d3vbqevRBTfrQc6jhRO3LvRWgeYG.Aw/VE1ku",
  //     "__v": 0
  // }

  }

  /**
   * this method is used to assign the value to the class variable currentUser
   * @param value 
   */
 pushData(value:any){
   //console.log( value)
  this.currentUser=value;
 }

 /**
  * this method emits the class variable, currentUser, using EventEmitter
  */
 getUser(){
  this.authenticationService.dashboard().subscribe(data=>{
    this.currentUser=data.json().user
    
    
    // this.pushedData.emit( data.json().user )
  });
  console.log("currentUser in userService" +this.currentUser)
 
 }


// User is updated to the database.
 saveUser(user){
  
 }

}
