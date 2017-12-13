import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BackendProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, public backend: BackendProvider) {
  }

  ionViewDidLoad() {
    
  }

  openPage(page){
    let modal = this.modal.create(page);
    modal.present();
  }

  signup(){
    let _user = this.user;
    this.backend.signup(_user).subscribe((res: any) => {
       console.log(res);
       if(res.status == 'success') {
         //notify and redirect to login page

       } else {
         //notify and retry

       }
    });
  }



}
