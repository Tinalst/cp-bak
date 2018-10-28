import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-animation8',
    templateUrl: './animation8.component.html',
    styleUrls: ['./animation8.component.scss'],
    animations: [
        trigger('a8', [
            state('open', style({
                height: '200px',
                opacity: 1,
                backgroundColor: 'lightyellow'
            })),
            state('close', style({
                height: '100px',
                opacity: 0.5,
                backgroundColor: 'green'
            })),
            transition('* => *', [
                animate('2s ease-in-out', keyframes([
                    style({
                        opacity: 0.1,
                        offset: 0.1
                    }),
                    style({
                        opacity: 0.6,
                        offset: 0.2
                    }),
                    style({
                        opacity: 1,
                        offset: 0.5,
                    }),
                    style({
                        opacity: 0.2,
                        offset: 0.7
                    })
                ]))
            ])
        ])
    ]
})
export class Animation8Component implements OnInit {
    state: string = 'open';
    constructor() { }

    ngOnInit() {
    }

    change = (): void => {
        this.state === 'open' ? this.state = 'close' : this.state = 'open';
    }

}
