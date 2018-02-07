import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {UtilService} from './util.service';

@Injectable()
export class AuthenticationService {
  public token: string;
  public userId: string;

  constructor(private http: Http, private utilservice: UtilService) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.userId = currentUser && currentUser.userId;
  }

  login(username: string, password: string): Observable<boolean> {
    // console.log(JSON.stringify({ logemail: username, logpassword: password }));

    return this.http.post(this.utilservice.loginUrl, {logemail: username, logpassword: password})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;
          this.userId =  response.json().user_id;
          console.log("Login:"+this.token);

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({userId: this.userId, token: token}));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  register(model): Observable<boolean> {
    //console.log(JSON.stringify({ logemail: username, logpassword: password }));

    return this.http.post(this.utilservice.registerUrl, model)
      .map((response: Response) => {

        let registered = response.json().auth;
        if(registered)return true; // successfully registered case;
        // error in registering
        return false;
       /* if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }*/
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  dashboard(): Observable<Response> {

    console.log(this.token+"+++++++++++++++++++++++++++++++++++++++++"+ this.userId)
    let headers = new Headers({'x-access-token': this.token, 'userId':this.userId});
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.utilservice.dashboardUrl, options)
      .map((response: Response) => {
      // console.log( JSON.stringify(response));
        return response;
      });
  }
}
