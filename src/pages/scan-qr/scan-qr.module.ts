import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanQrPage } from './scan-qr';
import { QRScanner } from '@ionic-native/qr-scanner';

@NgModule({
  declarations: [
    ScanQrPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanQrPage)
  ],
  exports: [
    ScanQrPage
  ],
  providers: [QRScanner]
})
export class ScanQrPageModule {}
