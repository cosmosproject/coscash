import { Component, OnInit, ViewChild } from '@angular/core';
import { Content, IonicPage, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UtilService } from '../../providers/index';

@IonicPage()
@Component({
  selector: 'page-transaction-detail',
  templateUrl: 'transaction-detail.html'
})
export class TransactionDetailPage implements OnInit {
  @ViewChild(Content) content: Content;

  constructor(public params: NavParams,
              public statusBar: StatusBar,
              public utilService: UtilService) {
    
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.statusBar.styleDefault();
  }

  ionViewWillLeave() {
    this.statusBar.styleLightContent();
  }

  ionViewDidLoad() {
   
  }
}
