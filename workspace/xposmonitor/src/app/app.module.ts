import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import { TicketComponent } from './ticket/ticket.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { RightAnalysicComponent } from './right-analysic/right-analysic.component';
import {HttpClientModule} from '@angular/common/http';
import { BtnComponent } from './btn/btn.component';


@NgModule({
    declarations: [
        AppComponent,
        MonitorComponent,
        TicketComponent,
        RightAnalysicComponent,
        BtnComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
