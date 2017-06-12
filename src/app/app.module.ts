import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Slide01Component } from './slide-01/slide-01.component';
import { Slide02Component } from './slide-02/slide-02.component';
import { Slide03Component } from './slide-03/slide-03.component';
import { Slide04Component } from './slide-04/slide-04.component';
import { Slide05Component } from './slide-05/slide-05.component';

@NgModule({
  declarations: [
    AppComponent,
    Slide01Component,
    Slide02Component,
    Slide03Component,
    Slide04Component,
    Slide05Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
