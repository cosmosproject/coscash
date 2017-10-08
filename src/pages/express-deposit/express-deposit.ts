import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-express-deposit',
  templateUrl: 'express-deposit.html',
})
export class ExpressDepositPage {
  showCancel: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpressDepositPage');
  }

  dismiss(){
    this.viewCtrl.dismiss({status:'canceled'});
  }

}
