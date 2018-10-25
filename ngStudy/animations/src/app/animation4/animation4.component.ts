import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-animation4',
    templateUrl: './animation4.component.html',
    styleUrls: ['./animation4.component.scss'],
    animations: [
        trigger('a4', [
            state('in', style({
                transform: 'translateX(0)'
            })),
            transition('void => *', [
                style({
                    transform: 'translateX(-100%)'
                }),
                animate('1s ease-in')
            ]),
            transition('* => void', [
                animate('1s ease-in', style({
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class Animation4Component implements OnInit {
    state: string = 'in';
    constructor() { }

    ngOnInit() {
    }

}
