import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ViewController, NavParams } from 'ionic-angular';
import { UtilService, BackendProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-express-deposit',
  templateUrl: 'express-deposit.html',
})
export class ExpressDepositPage {
  showCancel: boolean = true;
  details: any = {};
  currentUser: any = {};
  isSending: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              public modalCtrl: ModalController, public backend: BackendProvider) {
  }

  ngOnInit() {
    this.currentUser = this.backend.currentUser;
    let recipient = this.navParams.get('options') || {};
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  send() {
    let self = this;
    this.isSending = true;
    this.backend.expressDeposit(this.details).then((response: any) => {
      if(response.status == 'success') {
        let modal = self.modalCtrl.create('ConfirmSendPage', { message: this.details});
        this.isSending = false;
        modal.onDidDismiss(() => {
          self.viewCtrl.dismiss();
        })
        modal.present();
      } else {
        this.isSending = false;
      }
    }, (err) => {
      console.log(err);
      this.isSending = false;
    });
  }

}
