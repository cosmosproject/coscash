import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowQrPage } from './show-qr';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    ShowQrPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowQrPage),
    NgxQRCodeModule
  ],
  exports: [
    ShowQrPage
  ]
})
export class ShowQrPageModule {}
