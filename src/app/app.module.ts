import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from 'clarity-angular';

import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepeatElemPairComponent } from './samples/repeat-elem-pair/repeat-elem-pair.component';
import { BeforeunloadComponent } from './samples/beforeunload/beforeunload.component';
import { BeforeunloadGuard } from './samples/beforeunload/beforeunload.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepeatElemPairComponent,
    BeforeunloadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    ROUTING,
  ],
  providers: [
    BeforeunloadGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
