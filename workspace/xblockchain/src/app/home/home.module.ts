import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DisplayComponent } from './display/display.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { TicketComponent } from './ticket/ticket.component';
import {PublicModule} from '../public/public.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        PublicModule
    ],
    declarations: [HomeComponent, HeaderComponent, DisplayComponent, NavigationComponent, MainComponent, TicketComponent]
})
export class HomeModule { }
