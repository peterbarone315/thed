import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BacktalkPage } from './backtalk';

@NgModule({
  declarations: [
    BacktalkPage,
  ],
  imports: [
    IonicPageModule.forChild(BacktalkPage),
  ],
})
export class BacktalkPageModule {}
