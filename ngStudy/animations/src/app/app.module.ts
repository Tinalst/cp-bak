import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Animation1Component } from './animation1/animation1.component';
import {RouterModule} from '@angular/router';
import { Animation2Component } from './animation2/animation2.component';
import { Animation3Component } from './animation3/animation3.component';
import { Animation4Component } from './animation4/animation4.component';
import { Animations5Component } from './animations5/animations5.component';

@NgModule({
  declarations: [
    AppComponent,
    Animation1Component,
    Animation2Component,
    Animation3Component,
    Animation4Component,
    Animations5Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
