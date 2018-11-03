import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import { SvgtextfitDirective } from './util/directives/svgtextfit.directive';
import { TicketComponent } from './ticket/ticket.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        MonitorComponent,
        SvgtextfitDirective,
        TicketComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
