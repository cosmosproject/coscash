import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackendProvider } from '../../providers';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  currentUser: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public backend: BackendProvider) {

  }

  ngOnInit() {
    this.currentUser = this.backend.currentUser;
  }

}
