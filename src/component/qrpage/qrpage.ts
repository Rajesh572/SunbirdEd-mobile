import {Component, OnInit, AfterViewInit, AfterViewChecked} from '@angular/core'
import {SunbirdQRScanner} from '../../pages/qrscanner/sunbirdqrscanner.service'
import {ResourcesPage} from '../../pages/resources/resources'
import {NavController} from 'ionic-angular'
import {TabsPage} from 'sunbird'
//import {PageId} from 'sunbird'
@Component({
  selector: 'qrpage',
  templateUrl: 'qrpage.html'
})
export class QrPage {

  qrvisited:boolean = false;
  constructor(public qrScanner:SunbirdQRScanner,public navCtrl:NavController) {
  }

  ionViewDidEnter() {
    if(!this.qrvisited){
      this.qrScanner.startScanner('library');
      this.qrvisited = true;
      this.navCtrl.push(TabsPage);
      
    }
  }
  ionViewDidLeave() {
    this.qrvisited = false;
    console.log('didleave called');
  }

}
