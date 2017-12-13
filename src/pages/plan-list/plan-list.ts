import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import {
  BackendProvider, UtilService
} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-plan-list',
  templateUrl: 'plan-list.html'
})
export class PlanListPage implements OnInit {
  subscribers: Array<Subscription>;

  constructor(public navCtrl: NavController,
              public backend: BackendProvider,
              public modalCtrl: ModalController,
              public utilService: UtilService) {
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    
  }

  ionViewWillLeave() {
    
  }
  
  logout() {

  }

  openPage(plan) {
    this.navCtrl.push(plan, {});
  }
}

