import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import { TicketComponent } from './ticket/ticket.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IsNumberChangeDirective } from './util/directives/is-number-change.directive';
import {FormsModule} from '@angular/forms';
import { RightAnalysicComponent } from './right-analysic/right-analysic.component';


@NgModule({
    declarations: [
        AppComponent,
        MonitorComponent,
        TicketComponent,
        IsNumberChangeDirective,
        RightAnalysicComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
