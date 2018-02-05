import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DbServiceService } from '../db-services/db-service.service';

@Injectable()
export class RestaurantServiceService {

 value :any;
 pushedData = new EventEmitter<any>();
 constructor( private dbService: DbServiceService) {

 }

 pushData(value:any){
   this.value=value;
 }

 getRestaurant(){
  this.pushedData.emit(this.value);
 }

 getTopRestaurants(){
    this.dbService.getAllTopResturants()
 }

}
