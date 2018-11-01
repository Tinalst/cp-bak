import { ProductModel } from './../../util/product.model';
import {Component, OnInit, Input, ViewChild, ElementRef, Renderer2} from '@angular/core';


@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {

    @Input() ticket: ProductModel;
    @ViewChild('header') header: ElementRef;
    constructor(private render: Renderer2) {

    }

    ngOnInit() {
        this.setBg();
    }

    setBg = () => {
        this.render.setStyle(this.header.nativeElement, 'backgroundImage', `url("${this.ticket.type}")`);
        this.render.setStyle(this.header.nativeElement, 'backgroundRepeat', 'no-reapt');
    }

}
