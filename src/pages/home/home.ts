import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { EcradioPage } from '../ecradio/ecradio';
import { ThedlinePage } from '../thedline/thedline';
import { ThebaselinePage } from '../thebaseline/thebaseline';
import { BacktalkPage } from '../backtalk/backtalk';
import { DisruptionspecialsPage} from '../disruptionspecials/disruptionspecials';
import { EasebeatsandbizzPage } from '../easebeatsandbizz/easebeatsandbizz';
import { ZeescompanyPage } from '../zeescompany/zeescompany';
import { HomefreePage } from '../homefree/homefree';
import { WrestlefandomradioPage } from '../wrestlefandomradio/wrestlefandomradio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openEcradio() {
    this.navCtrl.push(EcradioPage);
  }

  openDisruptionSpecials() {
    this.navCtrl.push(DisruptionspecialsPage);
  }

  openThedline() {
    this.navCtrl.push(ThedlinePage);
  }

  openThebaseline() {
    this.navCtrl.push(ThebaselinePage);
  }

  openBacktalk() {
    this.navCtrl.push(BacktalkPage);
  }

  openEasebeatsandbizz() {
    this.navCtrl.push(EasebeatsandbizzPage);
  }

  openZeescompany() {
    this.navCtrl.push(ZeescompanyPage);
  }

  openHomefree() {
    this.navCtrl.push(HomefreePage);
  }

  openWrestlefandomradio() {
    this.navCtrl.push(WrestlefandomradioPage);
  }

}
