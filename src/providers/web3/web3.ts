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
  amaniContract: any;
  amani: any;

  constructor(public http: Http) {
    //this.webbie = new Web3(new Web3.providers.HttpProvider("http://52.208.46.161:8549"));
    //this.webbie = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/lPNN4kLAg6X2W8Wjb8Om"));
    Web3 = new Web3(new Web3.providers.HttpProvider("http://52.208.46.161:8549"));
    Web3.eth.defaultAccount = '0x54675C48173eB9b6565ba4D793d1403e119f67d5';
    console.log(Web3);
    this.amaniContract = Web3.eth.contract(
      [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]
      );
    
    this.amani = this.amaniContract.at('0x401dee214e4479a09c089a73cdce4ca5fbf75e04');
    //this.webbie.personal.unlockAccount('0xa627b72eDdCb6f88F1070a62D18B01F5679DcB21', 'ovodrake');
    //console.log(this.webbie);
  }

  createAccount(password: string) {
    return new Promise((resolve, reject) => {
       Web3.eth.personal.newAccount(password, function(err, success){
         console.log(err + ' ' + success);
          if(err) reject(err);
          resolve(success);
       });
    });
  }

  getBalance(account: any) {
    return new Promise((resolve, reject) => {
      this.amani.balanceOf(account, function(err, res) {
        if(err) reject(0);
        resolve(res.c[0]);
     });
    });
  }

  transfer(fromAccount: any, toAccount: any, amount: any) {
    console.log(Web3);
    return new Promise((resolve, reject) => {
      console.log(fromAccount + " " + toAccount + " " + amount);

      this.amani.approve(fromAccount, amount, function(err, res) {
        console.log(err + " " + res);
        if(err) { reject(err); }
        else {
          this.amani.transferFrom(fromAccount, toAccount, amount, function(err2, res2) {
            console.log(err2 + ' ' + res2);
            if(err) { reject(err2); }
            else { resolve(res2); }
          });
        }
      });
    });
  }

}
