import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CoscashApp } from './app.component';
import { Web3Provider, BackendProvider, UtilService } from '../providers/index';
import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [
    CoscashApp
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(CoscashApp, {
      preloadModules: true
    }),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CoscashApp
  ],
  providers: [
    Keyboard,
    SplashScreen,
    StatusBar,
    BrowserTab,
    BackendProvider,
    Web3Provider,
    UtilService
  ]
})
export class AppModule {
}
