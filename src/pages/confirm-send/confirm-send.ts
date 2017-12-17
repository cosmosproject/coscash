import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ConfirmSendPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-confirm-send',
  templateUrl: 'confirm-send.html',
})
export class ConfirmSendPage {
  message: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.message = this.navParams.get('message');
    console.log(this.message);
    let self = this;
    setTimeout(() => {
       self.viewCtrl.dismiss();
    }, 3000);
  }

}
