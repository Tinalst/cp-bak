import { NgModule } from '@angular/core';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { BtnComponent } from './btn/btn.component';

@NgModule({
    declarations: [TicketCardComponent, BtnComponent],
    exports: [
        TicketCardComponent,
        BtnComponent
    ]
})
export class PublicModule { }
