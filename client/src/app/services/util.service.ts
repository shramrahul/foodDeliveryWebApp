import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UtilService {

  loginUrl: string ="";
  registerUrl: string="";
  constructor(private http: HttpClient) { }

}
