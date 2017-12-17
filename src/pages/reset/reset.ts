import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ResetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
  user: any = {};

  constructor(public navCtrl: NavController) {
  }

  resetPassword() {
    
  }

  openPage(page){
    this.navCtrl.push(page);
  }

}
