import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-express-deposit',
  templateUrl: 'express-deposit.html',
})
export class ExpressDepositPage {
  showCancel: boolean = true;
  details: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
                           public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ExpressDepositPage');
    console.log(this.navParams);
  }

  dismiss(){
    this.viewCtrl.dismiss({status:'canceled'});
  }

  send() {
    let self = this;
    let modal = self.modalCtrl.create('ConfirmSendPage', { options: {}});
    modal.onDidDismiss((response: any) => {
      
    });
    modal.present();
  }

}
