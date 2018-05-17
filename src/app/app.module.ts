import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShowsPage } from '../pages/shows/shows';
import { CalendarPage } from '../pages/calendar/calendar';
import { ServicesPage } from '../pages/services/services';
import { ContactPage } from '../pages/contact/contact';
import { ChannelsPage } from '../pages/channels/channels';

/***** SHOWS LIST *****/
import { EcradioPage } from '../pages/ecradio/ecradio';
import { ThedlinePage } from '../pages/thedline/thedline';
import { ThebaselinePage } from '../pages/thebaseline/thebaseline';
import { BacktalkPage } from '../pages/backtalk/backtalk';
import { DisruptionspecialsPage} from '../pages/disruptionspecials/disruptionspecials';
import { EasebeatsandbizzPage } from '../pages/easebeatsandbizz/easebeatsandbizz';
import { ZeescompanyPage } from '../pages/zeescompany/zeescompany';
import { HomefreePage } from '../pages/homefree/homefree';
import { WrestlefandomradioPage } from '../pages/wrestlefandomradio/wrestlefandomradio';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EcradioPageModule } from '../pages/ecradio/ecradio.module';
import { YtProvider } from '../providers/yt/yt';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShowsPage,
    CalendarPage,
    ServicesPage,
    ContactPage,
    ChannelsPage,
    EcradioPage,
    ThedlinePage,
    BacktalkPage,
    ThebaselinePage,
    DisruptionspecialsPage,
    EasebeatsandbizzPage,
    ZeescompanyPage,
    HomefreePage,
    WrestlefandomradioPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShowsPage,
    CalendarPage,
    ServicesPage,
    ContactPage,
    ChannelsPage,
    EcradioPage,
    ThedlinePage,
    BacktalkPage,
    ThebaselinePage,
    DisruptionspecialsPage,
    EasebeatsandbizzPage,
    ZeescompanyPage,
    HomefreePage,
    WrestlefandomradioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YtProvider
  ]
})
export class AppModule {}
