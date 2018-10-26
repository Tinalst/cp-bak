import { Component, OnInit } from '@angular/core';
import {customAnimation} from '../animations/animation';
import {transition, trigger, useAnimation} from '@angular/animations';

@Component({
    selector: 'app-animation11',
    templateUrl: './animation11.component.html',
    styleUrls: ['./animation11.component.scss'],
    animations: [
        trigger('a11', [
            transition('* <=> *', [
                useAnimation(customAnimation, {
                    params: {
                        height: 0,
                        opacity: 1,
                        backgroundColor: 'red',
                        time: '1s'
                    }
                })
            ])
        ])
    ]
})
export class Animation11Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
