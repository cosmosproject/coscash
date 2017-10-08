import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UtilService, BackendProvider } from '../../providers';

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
    delete _user.Password2;
    this.backend.signup(_user).subscribe((res: any) => {
       console.log(res);
    });
  }



}
