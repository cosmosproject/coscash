import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {
  CONFIG,
  DatabaseService,
  DataPoint,
  DEFAULT_METRICS,
  Forecast,
  ForecastService,
  Location,
  Metrics,
  UtilService
} from '../../providers';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'home-dash',
  templateUrl: 'home-dash.html'
})
export class HomeDashComponent implements OnInit, OnDestroy {
  @Input() onInitEmitter: EventEmitter<string>;
  @Input() onDestroyEmitter: EventEmitter<string>;

  forecast: Forecast;
  metrics: Metrics;
  todayForecast: DataPoint;
  forecastSubscriber: Subscription;
  hourlyArray: Array<{
    time: number,
    icon: string,
    temperature: number
  }> = [];

  Plans: any[] = [
    {
      Name: 'MacBook'
    },
    {
      Name: 'Oven'
    },
    {
      Name: 'Auslandsemester'
    },
    {
      Name: 'Birthday'
    }
  ];

  Transactions: any[] = [
    {
      createdAt: 'Sunday, Oct 8',
      Type: 'Deposit',
      Amount: '€50,00'
    },
    {
      createdAt: 'Friday, Oct 6',
      Type: 'Withdrawal',
      Amount: '€30,00'
    },
    {
      createdAt: 'Friday, Oct X',
      Type: 'Withdrawal',
      Amount: '€20,00'
    },
    {
      createdAt: 'Friday, Oct X',
      Type: 'Withdrawal',
      Amount: '€20,00'
    }
  ]

  constructor(public navCtrl: NavController,
              public forecastService: ForecastService,
              public databaseService: DatabaseService,
              public utilService: UtilService,
              public modalCtrl: ModalController) {
  }

  planClicked(plan: any) {
    this.navCtrl.push('PlanDetailPage', {
      plan: plan
    });
  }

  transactionClicked(tran: any) {
    this.navCtrl.push('TransactionDetailPage', {
      transaction: tran
    });
  }

  addPlan() {
    let self = this;
    let modal = self.modalCtrl.create('NewPlanPage');
    modal.onDidDismiss((response: any) => {
      if(response.status == 'canceled'){
        self.utilService.showToast('canceled');
      } else {
        self.utilService.showToast('created');
      }
    });
    modal.present();
  }

  ngOnInit() {
    //these emitters are used to programmatically activate lifecycle events
    //because in Ionic 2, changing tabs doesn't activate lifecycle of templates
    if (this.onInitEmitter) {
      this.onInitEmitter.subscribe(() => this.init());
    }
    if (this.onDestroyEmitter) {
      this.onDestroyEmitter.subscribe(() => this.destroy());
    }
    this.init();
  }

  init() {
   
  }

  getForecast(location: Location) {
    let self = this;
    this.forecastSubscriber = self.forecastService.getForecast(location)
      .subscribe((data: Forecast) => {
        self.forecast = data;
        if (self.forecast && self.forecast.daily && self.forecast.daily.data) {
          self.todayForecast = self.forecast.daily.data[0];
        }
        self.hourlyArray = [];
        let currentHour = self.utilService.getCurrentHour(self.forecast.timezone);
        let flag = false;
        _.forEach(self.forecast.hourly.data, (obj: DataPoint) => {
          if (!flag && self.utilService.epochToHour(obj.time, self.forecast.timezone) < currentHour) {
            return;
          }
          flag = true;
          self.hourlyArray.push({
            time: obj.time,
            icon: obj.icon,
            temperature: obj.temperature
          });
          if (self.hourlyArray.length > 10) {
            return false;
          }
        });
      }, err => {
        console.error(err);
      });
  }

  ngOnDestroy() {
    this.destroy();
  }

  destroy() {
    if (this.forecastSubscriber) {
      this.forecastSubscriber.unsubscribe();
    }
  }
}
