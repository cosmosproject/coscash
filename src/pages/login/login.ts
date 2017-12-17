import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BackendProvider, UtilService } from '../../providers/index';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any = {};
  isProcessing: boolean = false;

  constructor(public navCtrl: NavController,
              public backend: BackendProvider, 
              public util: UtilService) {

  }

  openPage(page) {
    this.navCtrl.push(page);
  }

  login() {
    this.isProcessing = true;
    this.backend.signin(this.user).then((success: any) => {
      if (success) {
        this.isProcessing = false;
        this.navCtrl.setRoot('HomePage');
      } else {
        this.util.showToast('Invalid Email/Password or Account not found. Try again or create an account.');
        this.isProcessing = false;
      }
    }, (err) => {
      this.util.showToast('Invalid Email/Password or Account not found. Try again or create an account.');
      this.isProcessing = false;
    });
  }

}
