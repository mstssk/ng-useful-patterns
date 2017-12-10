import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from 'clarity-angular';

import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepeatElemPairComponent } from './samples/repeat-elem-pair/repeat-elem-pair.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepeatElemPairComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
