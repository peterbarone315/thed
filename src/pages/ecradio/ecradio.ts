import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-ecradio',
  templateUrl: 'ecradio.html',
})
export class EcradioPage {
   Ecpodcasts: any;

  //https://api.simplecast.com/v1/podcasts/4228/episodes.json?api_key=sc_BLGQDzLUL53_jWHcWPVdsA'
  apiUrl = 'https://api.simplecast.com/v1/podcasts/4228/episodes.json?api_key=sc_BLGQDzLUL53_jWHcWPVdsA';

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) { 
    this.getECpods();
    this.getECvideos();
  }

  getECpods(){
  return new Promise(resolve => {
    this.httpClient.get(this.apiUrl).subscribe(data => {
      resolve(data);
      this.Ecpodcasts = data;
      console.log(data);
    }, err => {
      console.log(err);
    });
  });
}

  getECvideos(){

  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcradioPage');
   
  }
}