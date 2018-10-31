import { ProductModel } from './../../util/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
    ticketsArray: Array<ProductModel> =  [
        {
            type: 'PLATINUM PASS',
            price: 'USD 250',
            items: [
                'Access to All Content Stages',
                'Access to Exhibition Arena',
                'Access to Business Matchmaking Tools',
                'Refreshments & Lunch',
                'Access to XBlockchain Lounge(s)',
                'Access to XBlockchain Award & Party',
                `'Exclusive Access to XBlockchain
                Leader’s Dinner'`
            ]
        },
        {
            type: 'SILVER PASS',
            price: 'USD 150',
            items: [
                'Access to All Content Stages',
                'Access to Exhibition Arena',
                'Access to Business Matchmaking Tools',
                'Refreshments & Lunch',
                'Access to XBlockchain Lounge(s)',
                'Access to XBlockchain Award & Party',
                `'Exclusive Access to XBlockchain
                Leader’s Dinner'`
            ]
        }
    ];
    constructor() { }

    ngOnInit() {
    }

}
