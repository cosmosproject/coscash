import {Component} from "@angular/core";
import {NavController, ModalController} from "ionic-angular";
import {
  UtilService,
  ForecastService,
  Forecast,
  DatabaseService,
  Metrics,
  DataPoint,
  Location,
  DEFAULT_METRICS,
  HOME_CONFIG,
  CONFIG
} from "../providers";
import {WeatherDetailPage} from "../weather-detail/weather-detail";
import {ModalLocation} from "../location/location";
import {Subscription} from "rxjs/Subscription";

@Component({
  templateUrl: 'home-weather.html'
})
export class HomeWeatherPage {
  forecast: Forecast;
  homeLocation: Location;
  metrics: Metrics;
  todayForecast: DataPoint;
  forecastSubscriber: Subscription;

  constructor(public navCtrl: NavController,
              public forecastService: ForecastService,
              public databaseService: DatabaseService,
              public modalCtrl: ModalController,
              public utilService: UtilService) {
  }

  itemClicked(item: any) {
    this.navCtrl.push(WeatherDetailPage, {
      forecast: this.forecast,
      currentForecast: item,
      currentLocation: this.homeLocation,
      metrics: this.metrics
    });
  }

  ionViewWillEnter() {
    let self = this;
    this.databaseService.getJson(HOME_CONFIG.LOCATION).then(data=> {
      if (data === null) {
        let modal = self.modalCtrl.create(ModalLocation, {heading: 'Enter Home City Name'});
        modal.onDidDismiss((data: Location) => {
          console.debug('page > modal dismissed > data > ', data);
          self.databaseService.setJson(HOME_CONFIG.LOCATION, data);
          self.homeLocation = data;
          self.getForecast();
        });
        modal.present();
      } else {
        self.homeLocation = data;
        self.getForecast();
      }
    });
    this.databaseService.getJson(CONFIG.METRICS).then(data=> {
      if (data === null) {
        self.databaseService.setJson(CONFIG.METRICS, DEFAULT_METRICS);
        self.metrics = DEFAULT_METRICS;
      } else {
        self.metrics = data;
      }
    });
  }

  getForecast() {
    let self = this;
    this.forecastSubscriber = self.forecastService.get(self.homeLocation.lat, self.homeLocation.lng)
      .subscribe((data: Forecast)=> {
        self.forecast = data;
        if (self.forecast && self.forecast.daily && self.forecast.daily.data) {
          self.todayForecast = self.forecast.daily.data[0];
        }
      }, err=> {
        console.debug(err);
      });
  }

  ionViewWillLeave() {
    if (this.forecastSubscriber) {
      this.forecastSubscriber.unsubscribe();
    }
  }
}