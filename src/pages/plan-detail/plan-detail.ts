import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage() 
@Component({
  selector: 'page-plan-detail',
  templateUrl: 'plan-detail.html'
})
export class PlanDetailPage {
  location: any;

  constructor(public params: NavParams) {
    
  }
}
