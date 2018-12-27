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
import { Animation6Component } from './animation6/animation6.component';
import { Animation7Component } from './animation7/animation7.component';
import {Animation8Component} from './animation8/animation8.component';
import {Animation9Component} from './animation9/animation9.component';
import {Animation10Component} from './animation10/animation10.component';
import {Animation11Component} from './animation11/animation11.component';
import { RouterAnimationComponent } from './router-animation/router-animation.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FadeAnimationComponent } from './fade-animation/fade-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    Animation1Component,
    Animation2Component,
    Animation3Component,
    Animation4Component,
    Animations5Component,
    Animation6Component,

    Animation7Component,
    Animation8Component,
    Animation9Component,
    Animation10Component,
    Animation11Component,
    RouterAnimationComponent,
    Test1Component,
    Test2Component,
    FadeAnimationComponent

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
