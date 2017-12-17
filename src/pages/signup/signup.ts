import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BackendProvider, UtilService } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: any = {};
  isProcessing: boolean = false;

  constructor(public navCtrl: NavController, 
              public util:UtilService, 
              public backend: BackendProvider) {
  }

  openPage(page){
    this.navCtrl.push(page);
  }

  signup(){
    this.isProcessing = true;
    let _user = this.user;
    this.backend.signup(_user).then((res: any) => {
       if(res.status == 'success') {
         //redirect to success page
         this.isProcessing = false;
         this.navCtrl.push('ConfirmRegPage');
       } else {
         //notify and retry
         this.util.showToast(res.body.errors[0].message);
         this.isProcessing = false;
       }
    }, (err) => {
      console.log(err);
    });
  }



}
