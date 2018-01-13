import { Component } from '@angular/core';
import { Nav, IonicPage, ModalController, NavController } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';

declare var moment: any;

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentUser: any;
  Transactions: any[] = []

  constructor(public modalCtrl: ModalController, 
              public navCtrl: NavController, 
              public backend: BackendProvider) {
    
  }

  ionViewWillEnter() {
      this.backend.getTransactions().subscribe((transactions: any) => {
         this.Transactions = transactions.body;
         this.currentUser = this.backend.currentUser;
      });
  }

  sendMoney() {
    let self = this;
    let modal = self.modalCtrl.create('ExpressDepositPage', { options: {}});
    modal.onDidDismiss((response: any) => {
      this.backend.getTransactions().subscribe((transactions: any) => {
        this.Transactions = transactions.body
     });
    });
    modal.present();
  }

  showQR() {
    let self = this;
    let modal = self.modalCtrl.create('ShowQrPage', { qrCode: this.currentUser.PublicKey});
    modal.onDidDismiss((response: any) => {
      this.backend.getTransactions().subscribe((transactions: any) => {
        this.Transactions = transactions.body
      });
    });
    modal.present();
  }

  scanQR() {
    let self = this;
    let modal = self.modalCtrl.create('ScanQrPage', { options: {}});
    modal.onDidDismiss((response: any) => {
      this.backend.getTransactions().subscribe((transactions: any) => {
        this.Transactions = transactions.body
     });
    });
    modal.present();
  }

  transactionClicked(tran: any) {
    this.navCtrl.push('TransactionDetailPage', {
      transaction: tran
    });
  }

}
