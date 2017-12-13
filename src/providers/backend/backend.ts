import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class BackendProvider {
  baseUrl: String = "http://localhost:3000/";
  currentUser: any;

  constructor(public http: Http) { }

  signup(user: any) {
    let _user = JSON.stringify(user);
    return this.http.post(this.baseUrl + 'users', _user, this.jwt()).map((response: Response) => {
      let res: any = response;
      let result = {
        status: 'failed',
        body: {},
        message: JSON.parse(res._body).message
      };
      if(res.status == 200) {
         result.status = 'success';
         result.body = JSON.parse(res._body);
      }
      return result;
    });
  }

  signin(user: any) {
      let _user = JSON.stringify(user);
      return this.http.post(this.baseUrl + 'auth', _user, this.jwt()).map((response: Response) => {
        let res: any = response;
        console.log(res);
        if(res.status == 200) {
          this.currentUser = JSON.parse(res._body);
          return true;
        }
        return false;
      });
  }

  isSignedIn() {
    console.log(typeof this.currentUser);
     if(typeof this.currentUser == undefined) {
       return false;
     }
     return true;
  }

  updateUser(user: any) {
    let _user = JSON.stringify(user);
    return this.http.patch(this.baseUrl + 'users', _user, this.jwt()).map((response: Response) => {
      let res: any = response;
      let result = {
        status: 'failed',
        body: {}
      };
      if(res.status == 200) {
         result.status = 'success';
         result.body = JSON.parse(res._body);
      }
      return result;
    });
  }

  logout() {
     this.currentUser = undefined;
  }

  getTransactions() {
    return this.http.get(this.baseUrl + 'users/' + '1' + '/transactions', this.jwt()).map((response: Response) => {
      let res: any = response;
      console.log(res);
      let result = {
        status: 'failed',
        body: {}
      };
      if(res.status == 200) {
        result.status = 'success';
        result.body = JSON.parse(res._body);
      }
      return result;
    })
  }


  expressDeposit() {

  }

  private jwt() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    return options;
  }

}
