import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Web3Provider } from '../web3/web3';

import 'rxjs/add/operator/map';

@Injectable()
export class BackendProvider {
  baseUrl: String = "http://api.cosmos-project.io/";
  currentUser: any = {};

  constructor(public http: Http,
              public amani: Web3Provider) { }

  signup(user: any) {
    console.log(user);
    let _user = JSON.stringify(user);
    return new Promise((resolve, reject) => {
      return this.http.post(this.baseUrl + 'users', _user, this.jwt()).subscribe((response: Response) => {
        let res: any = response;
        console.log(res);
        if(res.status !== 200) {
           reject({ status: 'failed', message: ''});
        } else {
          let newUser = JSON.parse(res._body);
          return this.amani.createAccount(newUser.Password).then((response: any) => {
            console.log(response);
            newUser.PublicKey = response;
            return this.updateUser(newUser);
          }).then((response: any) => {
               console.log(response);
               if(response.status == 'failed') reject({ status: 'failed', message: 'An unexpected error. Try again'});
               resolve({ status: 'success', body: response.body});
          }).catch((err) => {
               console.log(err);
               reject({ status: 'failed', message: 'Exception: An unexpected error. Try again'})
          });
        }
      });
    });
  }

  signin(user: any) {
      let _user = JSON.stringify(user);
      return new Promise((resolve, reject) => {
        return this.http.post(this.baseUrl + 'auth', _user, this.jwt()).subscribe((response: Response) => {
          let res: any = response;
          if(res.status == 200) {
            this.currentUser = JSON.parse(res._body);
            return this.amani.getBalance(this.currentUser.PublicKey).then((balance: any) => {
              this.currentUser.Balance = parseInt(balance);
              resolve(true);
            });
          } else {
            reject(false);
          }
        });
      });
  }

  isSignedIn() {
     if(this.currentUser && this.currentUser.id) {
       return true;
     }
     return false;
  }

  updateUser(user: any) {
    delete user.Balance;
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
     this.currentUser = {};
  }

  getTransactions() {
    return this.http.get(this.baseUrl + 'users/' + this.currentUser.id + '/transactions', this.jwt()).map((response: Response) => {
      let res: any = response;
      let result = {
        status: 'failed',
        body: []
      };
      if(res.status == 200) {
        result.status = 'success';
        result.body = JSON.parse(res._body);
      }
      return result;
    })
  }


  expressDeposit(details: any) {
    return new Promise((resolve, reject) => {
      this.amani.transfer(this.currentUser.PublicKey, details.recipient, parseInt(details.amount)).then((success: any) => {
        let payload = {
          Title: 'Sent',
          Amount: parseInt(details.amount),
          Sender: this.currentUser.id,
          Recipient: details.recipient
        };
        let _transaction = JSON.stringify(payload);
        return this.http.post(this.baseUrl + 'transactions/', _transaction, this.jwt()).subscribe((response: Response) => {
            let res: any = response;
            let result = {
             status: 'failed',
             body: []
           };
           if(res.status == 200) {
             result.status = 'success';
             result.body = JSON.parse(res._body);
           }
           resolve(result);
        });
      }, (err) => {
         reject(err);
      });
    });
  }

  private jwt() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    return options;
  }

}
