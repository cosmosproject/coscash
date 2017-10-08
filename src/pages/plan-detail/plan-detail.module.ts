import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanDetailPage } from './plan-detail';
import { ComponentsModule } from '../../components';

@NgModule({
  declarations: [
    PlanDetailPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PlanDetailPage)
  ],
  exports: [
    PlanDetailPage
  ]
})
export class PlanDetailPageModule {
}
