import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { BACKEND_CONFIG } from '../constants';
@Injectable()
export class BackendProvider {
  baseUrl: String = "http://ngvianney:8000/";
  currentUser: any;

  constructor(public http: Http) { }

  signup(user: any) {
    let _user = JSON.stringify(user);
    return this.http.post(this.baseUrl + '/users', _user).map((response: Response) => {
      let res: any = response;
      console.log(response);
    });
  }

  signin(user: any) {

  }

  isSignedIn() {

  }

  updateUser() {

  }

  logout() {

  }

  createPlan(plan: any) {

  }

  getPlans() {

  }

  updatePlan(plan: any) {

  }

  expressDeposit() {

  }

  withdraw() {

  }

}
