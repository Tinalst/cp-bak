import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouteReuseStrategy} from '@angular/router';
import {SimpleRouteReuseStrategy} from './SimpleRouteReuseStrategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: SimpleRouteReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
