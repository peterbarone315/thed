import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThedlinePage } from './thedline';

@NgModule({
  declarations: [
    ThedlinePage,
  ],
  imports: [
    IonicPageModule.forChild(ThedlinePage),
  ],
})
export class ThedlinePageModule {}
