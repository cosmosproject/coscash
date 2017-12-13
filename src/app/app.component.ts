import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackendProvider } from '../providers/backend/backend';

@Component({
  templateUrl: 'app.html'
})
export class CoscashApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: string = 'TabsPage';
  pages: any = [
    {
      heading: 'VIANNEY NG',
      items: [
        { title: 'Home', name: 'TabsPage', tabName: 'HomePage', index: 0, icon: 'ios-home-outline' },
        { title: 'Savings Plans', name: 'TabsPage', tabName: 'PlanListPage', index: 1, icon: 'ios-cash-outline' },
        { title: 'Profile', name: 'ProfilePage', icon: 'ios-contact-outline' }
      ]
    },
    {
      heading: 'Settings',
      items: [
        { title: 'Settings', name: 'SettingsPage', icon: 'ios-settings-outline' }
      ]
    }
  ];

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public browserTab: BrowserTab,
    public modalCtrl: ModalController,
    public backend: BackendProvider) {
    this.platformReady();
  }

  platformReady() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.initPlugins();
      }
      if (this.backend.isSignedIn()) {

      } else {
        let modal = this.modalCtrl.create('LoginPage');
        modal.present();
      }
    });
  }

  initPlugins() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#12121c');
    this.splashScreen.hide();
  }

  openPage(page: any) {
    if (this.isActive(page)) {
      return;
    }
    let params = page.index ? { tabIndex: page.index } : {};
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.name, params).catch(err => console.error(err));
    }
  }

  isActive(page: any): boolean {
    let childNav = this.nav.getActiveChildNav();
    if (childNav) {
      return childNav.getSelected() && childNav.getSelected().root === page.tabName;
    }
    return !!(this.nav.getActive() && this.nav.getActive().name === page.name);
  }

  poweredBy() {
    let url = 'http://cosmos-project.io/';
    this.browserTab.isAvailable()
      .then((isAvailable: boolean) => {
        if (isAvailable) {
          this.browserTab.openUrl(url);
        }
      })
      .catch(err => console.error(err));
  }
}
