import { EventEmitter, Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import moment from 'moment';
import * as _ from 'lodash';
import 'moment-timezone';

@Injectable()
export class UtilService {
  tabChangeEvent;

  constructor(public toastCtrl: ToastController) {
    this.tabChangeEvent = new EventEmitter<string>();
  }

  getTabChangeEvent() {
    return this.tabChangeEvent;
  }

  showToast(message, duration?) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration || 3000
    });
    toast.present();
  }
}
