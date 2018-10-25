import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-animation6',
    templateUrl: './animation6.component.html',
    styleUrls: ['./animation6.component.scss'],
    animations: [
        trigger('a6', [
            state('true', style({
                height: '*'
            })),
            state('false', style({
                height: '0px'
            })),
            transition('false => true', [
                animate('500ms ease-in-out')
            ])
        ])
    ]
})
export class Animation6Component implements OnInit {
    state = true;
    constructor() { }

    ngOnInit() {
    }

    change = (): void => {
        this.state = !this.state;
    }

}
