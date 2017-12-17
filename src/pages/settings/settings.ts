import { Component, OnInit } from '@angular/core';
import { BackendProvider } from '../../providers';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'settings.html',
  styles: [`
    .list-ios {
      margin-bottom: 10px;
    }
  `]
})
export class SettingsPage implements OnInit {
  currentUser: any = {};

  constructor(public modalCtrl: ModalController,
    public backend: BackendProvider,
    public navCtrl: NavController) {
  }

  ngOnInit() {
    this.currentUser = this.backend.currentUser;
  }

  Change() {

  }
}
