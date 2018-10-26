import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-animation7',
    templateUrl: './animation7.component.html',
    styleUrls: ['./animation7.component.scss'],
    animations: [
        trigger('openClose', [
            state('open', style({
                height: '100px',
                backgroundColor: 'lightyellow'
            })),
            state('close', style({
                height: '200px',
                backgroundColor: 'lightblue'
            })),
            transition('open => close', [
                animate('.5s ease-in-out')
            ]),
            transition('close => open', [
                animate('.5s ease-in-out')
            ])
        ])
    ]
})
export class Animation7Component implements OnInit {
    isOpen: string = 'open';

    constructor() {
    }

    ngOnInit() {
    }

    change = (): void => {
        this.isOpen === 'open' ? this.isOpen = 'close' : this.isOpen = 'open';
    };

    // 动画回调监听事件
    onAnimationsEvent = (event: AnimationEvent): void => {
        console.log(event);
    };

}
