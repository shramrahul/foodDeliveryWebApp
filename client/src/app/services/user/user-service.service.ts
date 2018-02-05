import { Injectable, EventEmitter } from '@angular/core';
import { DbServiceService } from '../db-services/db-service.service';


@Injectable()
export class UserServiceService {

  
  private currentUser;
  

  pushedData= new EventEmitter<any>();
  constructor (dbService:DbServiceService) { 
    this.currentUser=dbService.getTheCurrentSessionOfLoggedUser();
  }

 pushData(value:any){
   //console.log( value)
  this.currentUser=value;
 }

 getUser(){
   this.pushedData.emit(this.currentUser);
 }

}
