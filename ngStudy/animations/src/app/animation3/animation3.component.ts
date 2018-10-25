import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-animation3',
    templateUrl: './animation3.component.html',
    styleUrls: ['./animation3.component.scss'],
    animations: [
        trigger('a3', [
            state('open', style({
                backgroundColor: 'pink'
            })),
            state('close', style({
                backgroundColor: 'lightblue'
            })),
            transition('* => open', [
                animate('.5s ease-in-out')
            ]),
            transition('* => close', [
                animate('.5s ease-in')
            ]),
            transition('open <=> close', [
                animate('3s ease-in-out')
            ])
        ])
    ]
})
export class Animation3Component implements OnInit {
    state: string = 'open';

    constructor() { }

    ngOnInit() {
    }

    changeMyValue = (): void => {
        this.state === 'open' ? this.state = 'close' : this.state = 'open';
    }


}
