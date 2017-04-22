import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {VirtualScrollModule} from 'od-virtualscroll';

import {AppComponent} from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    VirtualScrollModule
  ]
})
export class AppModule {}
