import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UtilService {

  public loginUrl: string ="http://localhost:8080/login";
  registerUrl: string="http://localhost:8080/register";
  constructor(public http: HttpClient) { }

  public getLoginUrl(){
    return this.loginUrl;
  }
  public getRegisterUrl(){
    return this.registerUrl;
  }

}
