import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TransactionDetailPage } from './transaction-detail';

@NgModule({
  declarations: [
    TransactionDetailPage
  ],
  imports: [
    IonicPageModule.forChild(TransactionDetailPage)
  ],
  entryComponents: [
    TransactionDetailPage
  ]
})
export class TransactionDetailPageModule {
}
