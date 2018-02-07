import {Injectable} from '@angular/core';

@Injectable()
export class UtilService {

  private _baseUrl: string ="http://localhost:8080/";
  private _loginUrl: string =this._baseUrl+"login";
  private _registerUrl: string=this._baseUrl+"register";
  private _dashboardUrl: string=this._baseUrl+"dashboard";
  private _searchUrl: string=this._baseUrl+"restaurant/search";
  private _topResturantsUrl: string=this._baseUrl+"restaurant/get";
  constructor() { }


  get baseUrl(): string {
    return this._baseUrl;
  }

  get loginUrl(): string {
    return this._loginUrl;
  }

  get registerUrl(): string {
    return this._registerUrl;
  }

  get dashboardUrl(): string {
    return this._dashboardUrl;
  }


  get searchUrl(): string {
    return this._searchUrl;
  }


  get topResturantsUrl(): string {
    return this._topResturantsUrl;
  }
}
