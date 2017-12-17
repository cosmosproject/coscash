import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { BackendProvider } from '../../providers'

/**
 * Generated class for the ShowQrPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-show-qr',
  templateUrl: 'show-qr.html',
})
export class ShowQrPage {
  showCancel: boolean = true;
  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = 'kilomafia';
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController,
              public backend: BackendProvider) {
  }

  ngOnInit() {
    
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }


}
