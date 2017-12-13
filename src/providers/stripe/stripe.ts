import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Stripe } from '@ionic-native/stripe';

@Injectable()
export class StripeProvider {

  constructor(public http: Http, public stripe: Stripe) {
    console.log('Hello StripeProvider Provider');
    this.stripe.setPublishableKey('pk_test_CjQXGpf8SvlV7xKIsaScI1ho');
  }

  payWithStripe() {
    let self = this;
    let card = {
      number: '4242424242424242',
      expMonth: 12,
      expYear: 2020,
      cvc: '220'
    };

    return new Promise((resolve, reject) => {
       self.stripe.createCardToken(card).then((token) => {
         console.log(token);
         resolve(true);
       }, (err) => {
         console.log(err);
         reject(false);
       })
    });
  }

}
