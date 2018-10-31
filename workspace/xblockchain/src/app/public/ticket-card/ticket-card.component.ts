import { ProductModel } from './../../util/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {

    @Input() ticket: ProductModel;
    constructor() {

    }

    ngOnInit() {
    }



}
