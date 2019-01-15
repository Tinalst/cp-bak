import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateASceneComponent } from './create-ascene/create-ascene.component';
import { StarrySkyComponent } from './starry-sky/starry-sky.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateASceneComponent,
    StarrySkyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
