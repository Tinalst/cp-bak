import { Component, OnInit } from '@angular/core';
import {ToolUtil} from '../utils/tool.util';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
    screenCount: number = 0;
    constructor() { }

    ngOnInit() {
    }

    controlScreen = () => {
        this.screenCount++;
        this.screenCount % 2 === 1 ? ToolUtil.launchFullScreen(document.documentElement) : ToolUtil.exitFullScreen(document);
    }
}
