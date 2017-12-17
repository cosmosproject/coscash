import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmRegPage } from './confirm-reg';

@NgModule({
  declarations: [
    ConfirmRegPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmRegPage),
  ],
  exports: [
    ConfirmRegPage
  ]
})
export class ConfirmRegPageModule {}
