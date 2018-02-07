import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DbServiceService } from '../db-services/db-service.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http/src/static_response';
import { Http } from '@angular/http';
import {UtilService} from '../util.service';
import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantServiceService {

 value :any;
 pushedData = new EventEmitter<any>();
 constructor( private dbService: DbServiceService, private httpClient :HttpClient,
private http: Http, private utilservice : UtilService) {

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


  getNearRestaurant(coordinate):Observable<Response>{
   return this.http.post(this.utilservice.searchUrl, coordinate)
     .map((response: Response) => {
       return response;
     });
 }

 getTopRestaurants(): any{
    return this.http.get(this.utilservice.topResturantsUrl)
    .map((data: Response) => {
      if(data.status == 200) {
        console.log(data)
        return data;

      }else {
        return "error";
      }
    })

 }

  getSearchRestaurant(search_key: String):Observable<Response> {
    return this.http.post(this.utilservice.searchUrl, {search:search_key})
      .map((response: Response) => {
        return response;
      });
  }
}
