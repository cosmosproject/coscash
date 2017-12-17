import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ConfirmRegPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-confirm-reg',
  templateUrl: 'confirm-reg.html',
})
export class ConfirmRegPage {

  constructor(public navCtrl: NavController) {
    
  }

  ngOnInit() {
    let self = this;
    setTimeout(() => {
      self.navCtrl.push('LoginPage');
    }, 3000);
  }

}
