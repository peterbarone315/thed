import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@IonicPage()
@Component({
  selector: 'page-ecradio',
  templateUrl: 'ecradio.html',
})
export class EcradioPage {
   Ecpodcasts: any;
   Ecvideos: any;


  apiUrl = 'https://api.simplecast.com/v1/podcasts/4228/episodes.json?api_key=sc_BLGQDzLUL53_jWHcWPVdsA';
  ytapiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLueRqxTsQ74K4P3u-2O9434j9QiF3dKtT&key=AIzaSyCGiBjckOk0-vdJgOHrPpr75pOXgM_iJ4U';
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) { 
    this.getECpods();
    this.getECvideolists();
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

  getECvideolists(){
    return new Promise(resolve => {
      this.httpClient.get(this.ytapiUrl).subscribe(ytdata => {
        resolve(ytdata);
        this.Ecvideos = ytdata;
        console.log(ytdata);
      }, err => {
        console.log(err);
      });
    });
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcradioPage');
   
  }
}