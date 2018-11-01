import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
    currentCount: number = 200040905;
    changeCount: number = 200040905;
    timer;
    constructor() { }

    ngOnInit() {
        // set(this.changeTradeCount, 1000);
        this.changeTradeCount();
    }

    changeTradeCount = () => {
        this.changeCount += 10;
        if (this.changeCount > this.currentCount) {
            this.timer = setInterval(this.quickChange, 100);
        }
    }

    quickChange = () => {
        let diff = this.changeCount - this.currentCount;
        if (diff > 0) {
            this.currentCount ++;
        }else {
            clearInterval(this.timer);
        }
    }

}
