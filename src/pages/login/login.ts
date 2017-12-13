import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BackendProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, 
              public backend: BackendProvider) {

  }

  ionViewDidLoad() {
    
  }

  openPage(page){
      let modal = this.modal.create(page, {});
      modal.present();
  }

  login(){
    this.backend.signin(this.user).subscribe((response: any) => {
       console.log(response);
    });
  }

}
