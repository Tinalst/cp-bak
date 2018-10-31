import { NgModule } from '@angular/core';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { BtnComponent } from './btn/btn.component';
import { CountDownComponent } from './count-down/count-down.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TicketCardComponent, BtnComponent, CountDownComponent],
    exports: [
        TicketCardComponent,
        BtnComponent,
        CountDownComponent
    ]
})
export class PublicModule { }
