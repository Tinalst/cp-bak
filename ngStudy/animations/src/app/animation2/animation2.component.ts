import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-animation2',
    templateUrl: './animation2.component.html',
    styleUrls: ['./animation2.component.scss'],
    animations: [
        trigger('myAnimation', [
            state('open', style({
                height: '100px',
                borderWidth: '2px',
                borderStyle: 'solid',
                backgroundColor: 'pink'
            })),
            state('close', style({
                height: '100px',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: 'pink',
                backgroundColor: 'lightblue'
            })),
            transition('open => close', [
                animate('0.5s ease-in-out')
            ]),
            transition('close => open', [
                animate('1s ease-in')
            ])
        ])
    ]
})
export class Animation2Component implements OnInit {
    state: string = 'open';
    constructor() { }

    ngOnInit() {
    }

    changeState = (): void => {
        this.state === 'open' ? this.state = 'close' : this.state ='open';
    }

}
