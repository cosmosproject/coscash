import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpressDepositPage } from './express-deposit';

@NgModule({
  declarations: [
    ExpressDepositPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpressDepositPage),
  ],
  exports: [
    ExpressDepositPage
  ]
})
export class ExpressDepositPageModule {}
