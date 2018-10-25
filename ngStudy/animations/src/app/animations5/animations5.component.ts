import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-animations5',
    templateUrl: './animations5.component.html',
    styleUrls: ['./animations5.component.scss'],
    animations: [
        trigger('a5', [
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate('.5s', style({
                    opacity: 1
                }))
            ]),
            transition(':leave', [
                animate('.5s', style({
                    opacity: 0
                }))
            ])
        ])
    ]
})
export class Animations5Component implements OnInit {
    isShow = false;
    constructor() { }

    ngOnInit() {
    }

    change = () => {
        this.isShow ? this.isShow = false : this.isShow = true;
    }

}
