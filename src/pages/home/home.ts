import { Component, EventEmitter } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { CONFIG, DatabaseService, Location, UtilService } from '../../providers';

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
  location: any;

  constructor(public databaseService: DatabaseService,
              public modalCtrl: ModalController,
              public utilService: UtilService) {
    this.onInitEmitter = new EventEmitter<string>();
    this.onDestroyEmitter = new EventEmitter<string>();
  }

  ionViewWillEnter() {
    // let self = this;
    // this.databaseService.getJson(CONFIG.HOME_LOCATION).then(data => {
    //   if (data === null) {
    //     let modal = self.modalCtrl.create('LocationPage', { heading: 'Enter Home City', showCancel: false });
    //     modal.onDidDismiss((data: Location) => {
    //       console.debug('page > modal dismissed > data > ', data);
    //       if (data) {
    //         self.databaseService.setJson(CONFIG.HOME_LOCATION, data);
    //         self.location = data;
    //         self.emitInit();
    //       }
    //     });
    //     modal.present();
    //   } else {
    //     self.location = data;
    //     self.emitInit();
    //   }
    // });
    this.location = {};
    this.emitInit();
  }

  expressDeposit() {
    let self = this;
    let modal = self.modalCtrl.create('ExpressDepositPage');
    modal.onDidDismiss((response: any) => {
      if(response.status == 'canceled'){
        self.utilService.showToast('canceled');
      } else {
        self.utilService.showToast('created');
      }
    });
    modal.present();
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
