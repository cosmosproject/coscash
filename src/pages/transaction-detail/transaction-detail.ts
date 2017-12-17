import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UtilService } from '../../providers/index';

@IonicPage()
@Component({
  selector: 'page-transaction-detail',
  templateUrl: 'transaction-detail.html'
})
export class TransactionDetailPage {
  transaction: any = {};
  constructor(public params: NavParams,
              public statusBar: StatusBar,
              public utilService: UtilService) {
    
  }

  ionViewWillEnter() {
    this.transaction = this.params.get('transaction');
    console.log(this.transaction);
  }

}
