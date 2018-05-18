import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-ecradio',
  templateUrl: 'ecradio.html',
})
export class EcradioPage {
  url: string
  data: string
  ecpodsUrl: string
  ecpodCasts : any

  constructor(public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.ecpodsUrl = 'https://rss.simplecast.com/podcasts/4228/rss';
    console.log('hello simple cast');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcradioPage');
    this.getEcradioPods();
  }

  getEcradioPods(){
    //https://rss.simplecast.com/podcasts/4228/rss
    return new Promise(resolve => {
      this.http.get(this.ecpodsUrl, {responseType:'text'}).subscribe(data => {
        resolve(data);
        this.ecpodCasts=(data);
        //JSON.stringify(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
 }

}