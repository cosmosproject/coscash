import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var Web3: any;
/*
  Generated class for the Web3Provider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Web3Provider {
  webbie: any;

  constructor(public http: Http) {
    console.log('init webbie');
    this.webbie = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    console.log(this.webbie);
  }

  createAccount() {
    console.log(this.webbie);
  }

  getBalance() {

  }

  transfer() {

  }

}
