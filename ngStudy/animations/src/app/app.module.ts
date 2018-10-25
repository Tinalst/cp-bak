import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Animation1Component } from './animation1/animation1.component';
import {RouterModule} from '@angular/router';
import { Animation2Component } from './animation2/animation2.component';
import { Animation3Component } from './animation3/animation3.component';

@NgModule({
  declarations: [
    AppComponent,
    Animation1Component,
    Animation2Component,
    Animation3Component
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
