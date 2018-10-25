import { Component, OnInit } from '@angular/core';
import {state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-animation1',
    templateUrl: './animation1.component.html',
    styleUrls: ['./animation1.component.scss'],
    animations: [
        trigger('myAnimationTrigger', [
            state('visible', style({
                height: '100px',
                opacity: 0.5,
                backgroundColor: 'green'
            })),
            state('hidden', style({
                opacity: 1,
                backgroundColor: 'pink'
            }))
        ])
    ]
})
export class Animation1Component implements OnInit {
    myValue = 'visible';
    constructor() { }

    ngOnInit() {
    }

    changeMyValue = (): void => {
        this.myValue === 'visible' ? this.myValue = 'hidden' : this.myValue = 'visible';
    }

}
