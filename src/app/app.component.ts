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
  rootPage: string = "HomePage";
  pages: any = [
    {
      heading: 'VIANNEY NG',
      items: [
        { title: 'Home', name: 'HomePage', icon: 'ios-home-outline' },
        { title: 'Profile', name: 'ProfilePage', icon: 'ios-contact-outline' },
        { title: 'Settings', name: 'SettingsPage', icon: 'ios-settings-outline' },
        { title: 'Cosmos & Amani', name: 'AboutPage', icon: 'ios-information-circle-outline' }
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
        this.rootPage = "HomePage"
      } else {
        this.rootPage = "LoginPage"
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
    this.nav.setRoot(page.name);
  }

  isActive(page: any): boolean {
    let childNav = this.nav.getActiveChildNav();
    if (childNav) {
      return childNav.getSelected() && childNav.getSelected().root === page.tabName;
    }
    return !!(this.nav.getActive() && this.nav.getActive().name === page.name);
  }

  logout() {

  }

  poweredBy() {
    let url = 'http://ethereum.org/';
    this.browserTab.isAvailable()
      .then((isAvailable: boolean) => {
        if (isAvailable) {
          this.browserTab.openUrl(url);
        }
      })
      .catch(err => console.error(err));
  }
}
