import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';
import * as _ from 'lodash';

@Component({
  selector: 'home-dash',
  templateUrl: 'home-dash.html'
})
export class HomeDashComponent implements OnInit, OnDestroy {
  @Input() onInitEmitter: EventEmitter<string>;
  @Input() onDestroyEmitter: EventEmitter<string>;

  Transactions: any[] = [
    {
      createdAt: 'Sunday, Oct 8',
      Type: 'Sent',
      Amount: '50,00 AI'
    },
    {
      createdAt: 'Friday, Oct 6',
      Type: 'Sent',
      Amount: '30,00 AI'
    },
    {
      createdAt: 'Friday, Oct X',
      Type: 'Received',
      Amount: '340,00 AI'
    },
    {
      createdAt: 'Friday, Oct X',
      Type: 'Sent',
      Amount: '20,00 AI'
    }
  ]

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
  }

  transactionClicked(tran: any) {
    this.navCtrl.push('TransactionDetailPage', {
      transaction: tran
    });
  }

  addPlan() {
    let self = this;
    let modal = self.modalCtrl.create('NewPlanPage');
    modal.onDidDismiss((response: any) => {
      
    });
    modal.present();
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    
  }

}
