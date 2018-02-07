import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DbServiceService } from '../db-services/db-service.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http/src/static_response';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import{ UtilService} from '../util.service'

@Injectable()
export class RestaurantServiceService {

 value :any;
 pushedData = new EventEmitter<any>();
 constructor( private dbService: DbServiceService, private httpClient :HttpClient,
private http: Http, private utilservice :UtilService) {

 }

 /**
  * this method assigns the value to the class variable
  * @param value - a variable that grabs the value
  */
 pushData(value:any){
   console.log("value=>>>>"+value, typeof value)
   this.value=value;
 }

 /**
  * this method emits the class varaible, value, using eventEmitter
  */
 getRestaurant(){
  this.pushedData.emit(this.value);
 }


 

 getTopRestaurants(): any{
    return this.http.get("http://localhost:8080/restaurant/get")
    .map((data: Response) => {
      if(data.status == 200) {
        console.log(data.json())
        return data.json();
        
      }else {
        return "error";
      }
    })
    
    
 }



 getNearRestaurant(coordinate):Observable<Response>{
  return this.http.post(this.utilservice.searchUrl, coordinate)
    .map((response: Response) => {
      console.log(response.json())
      return response.json();
    });
}


getSearchRestaurant(search_key: String):Observable<any> {
  return this.http.post(this.utilservice.searchUrl, {search:search_key})
    .map((data: Response) => {
      
      if(data.status == 200) {
        console.log(data.json().restaurants)
        return data.json().restaurants;
        
      }else {
        return "error";
      }
    });
}



 //save restaurant to database on checkout
 saveRestaurant(restaurant:any){
   
 }

}