import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Location } from '../../providers';

@IonicPage() 
@Component({
  selector: 'page-plan-detail',
  templateUrl: 'plan-detail.html'
})
export class PlanDetailPage {
  location: Location;

  constructor(public params: NavParams) {
    this.location = params.data.location;
  }
}
