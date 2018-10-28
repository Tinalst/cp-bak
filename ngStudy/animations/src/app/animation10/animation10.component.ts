import { Component, OnInit } from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-animation10',
    templateUrl: './animation10.component.html',
    styleUrls: ['./animation10.component.scss'],
    animations: [
        trigger('filterAnimation', [
            transition(':enter, * => 0, * => -1', []),
            transition(':increment', [
                query(':enter', [
                    style({opacity: 0, width: '0px'}),
                    stagger('5s', [
                        animate('1s ease-out', style({opacity: 1, width: '*'})),
                    ]),
                ], {optional: true})
            ]),
            transition(':decrement', [
                query(':leave', [
                    stagger('5s', [
                        animate('1s ease-out', style({opacity: 0, width: '0px'})),
                    ]),
                ])
            ]),
        ]),
    ]
})
export class Animation10Component implements OnInit {
    heroTotal = -1;
    constructor() { }

    ngOnInit() {
    }

    increase = () => {
        this.heroTotal ++;
    };

    // decrease = () => {
    //     this.heroTotal --;
    // };

}
