import { Component, EventEmitter } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  onInitEmitter: EventEmitter<string>;
  onDestroyEmitter: EventEmitter<string>;

  Transactions: any[] = []

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public backend: BackendProvider) {
    this.onInitEmitter = new EventEmitter<string>();
    this.onDestroyEmitter = new EventEmitter<string>();
  }

  ionViewWillEnter() {
    if(this.backend.isSignedIn()) {
       this.backend.getTransactions().subscribe((transactions: any) => {
        this.Transactions = transactions;
       });
    }
  }

  sendMoney() {
    let self = this;
    let modal = self.modalCtrl.create('ExpressDepositPage', { options: {}});
    modal.onDidDismiss((response: any) => {
      
    });
    modal.present();
  }

  showQR() {
    let self = this;
    let modal = self.modalCtrl.create('ShowQrPage', { options: {}});
    modal.onDidDismiss((response: any) => {
      
    });
    modal.present();
  }

  scanQR() {
    let self = this;
    let modal = self.modalCtrl.create('ScanQrPage', { options: {}});
    modal.onDidDismiss((response: any) => {
      
    });
    modal.present();
  }

  transactionClicked(tran: any) {
    this.navCtrl.push('TransactionDetailPage', {
      transaction: tran
    });
  }

  emitInit() {
    if (this.onInitEmitter) {
      this.onInitEmitter.emit('');
    }
  }

  ionViewWillLeave() {
    if (this.onDestroyEmitter) {
      this.onDestroyEmitter.emit('');
    }
  }


}
