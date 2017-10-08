import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanListPage } from './plan-list';
import { DirectivesModule } from '../../directives';

@NgModule({
  declarations: [
    PlanListPage
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(PlanListPage)
  ],
  exports: [
    PlanListPage
  ]
})
export class PlanListPageModule {
}
