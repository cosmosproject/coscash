import { Component, NgZone } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import * as _ from 'lodash';

declare let google: any;

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-new-plan',
  templateUrl: 'new-plan.html'
})
export class NewPlanPage {
  showCancel: boolean;
  plan: any = {};

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public keyboard: Keyboard,
              public zone: NgZone) {
    this.showCancel = navParams.data.showCancel !== undefined ? navParams.data.showCancel : true;
  }

  ionViewDidEnter() {
    this.zone.run(() => {
      this.keyboard.show();
    });
  }

  ionViewWillEnter() {
    
  }

  ionViewWillLeave() {
    this.keyboard.close();
  }

  dismiss() {
    this.viewCtrl.dismiss({status:'canceled'});
  }

  createPlan() {
    let self = this;
    let response = {
      status: 'canceled'
    };
    self.zone.run(() => {
      self.viewCtrl.dismiss(response);
    });
  }

}
