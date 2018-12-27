import { Component, OnInit } from '@angular/core';
import {animate, group, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-animation9',
    templateUrl: './animation9.component.html',
    styleUrls: ['./animation9.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('in', style({
                width: 120,
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('void => *', [
                style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                group([
                    animate('0.3s 0.1s ease', style({
                        transform: 'translateX(0)',
                        width: 120
                    })),
                    animate('0.3s ease', style({
                        opacity: 1
                    }))
                ])
            ]),
            transition('* => void', [
                group([
                    animate('0.3s ease', style({
                        transform: 'translateX(50px)',
                        width: 10
                    })),
                    animate('0.3s 0.2s ease', style({
                        opacity: 0
                    }))
                ])
            ])
        ])
    ]
})
export class Animation9Component implements OnInit {
    show = true;
    constructor() { }

    ngOnInit() {
    }

    change = () => {
        this.show = !this.show;
    }

}
