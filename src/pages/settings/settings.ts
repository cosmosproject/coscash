import { Component, OnInit } from '@angular/core';
import {
  UtilService,
  BackendProvider
} from '../../providers';
import { IonicPage, ModalController } from 'ionic-angular';

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

  constructor( public modalCtrl: ModalController, 
               public utilService: UtilService,
               public backend: BackendProvider) {
  }

  ngOnInit() {
    
  }
}
