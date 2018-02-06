import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DbServiceService } from '../db-services/db-service.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http/src/static_response';
import { Http } from '@angular/http';

@Injectable()
export class RestaurantServiceService {

 value :any;
 pushedData = new EventEmitter<any>();
 constructor( private dbService: DbServiceService, private httpClient :HttpClient,
private http: Http) {

 }

 /**
  * this method assigns the value to the class variable
  * @param value - a variable that grabs the value
  */
 pushData(value:any){
   this.value=value;
 }

 /**
  * this method emits the class varaible, value, using eventEmitter
  */
 getRestaurant(){
  this.pushedData.emit(this.value);
 }


 getSearchRestaurant(search_key: String, latitude: Number, longitude:Number){
  
 }

 getTopRestaurants(){
    (this.http.get("http://localhost:8080/restaurant/get"))
    .map((data: Response) => data.json())
    .subscribe((x)=>{
    this.value=x;
    console.log(this.value)
    })
    
 }
}