import { Injectable, EventEmitter } from '@angular/core';
import { DbServiceService } from '../db-services/db-service.service';


@Injectable()
export class UserServiceService {

  
  private currentUser;
  

  pushedData= new EventEmitter<any>();
  constructor (dbService:DbServiceService) { 
    this.currentUser=dbService.getTheCurrentSessionOfLoggedUser();
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
   this.pushedData.emit(this.currentUser);
 }

}
