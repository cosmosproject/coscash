import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmSendPage } from './confirm-send';

@NgModule({
  declarations: [
    ConfirmSendPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmSendPage),
  ],
  exports: [
    ConfirmSendPage
  ]
})
export class ConfirmSendPageModule {}
