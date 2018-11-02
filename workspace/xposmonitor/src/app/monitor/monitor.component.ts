import { Component, OnInit } from '@angular/core';
import {TimeModel} from '../util/models/time.model';
import {TimeUtil} from '../util/time.util';
import {AccountInfoListModel} from '../util/models/accountInfoList.model';
import {MonitorListModel} from '../util/models/monitorList.model';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
    currentCount: number = 200040905;
    changeCount: number = 200040905;
    timer;
    nowTimer;
    timeObj: TimeModel = new TimeModel();

    analysicInfo: AccountInfoListModel[] = [];
    monitorList: Array<MonitorListModel> = [];
    totalAmount: string;

    constructor() {
        this.analysicInfo = [

        ];
        this.monitorList = [
            {
                'amount': 100,
                'storeName': '无人飞行馆',
            },
            {
                'amount': 200,
                'storeName': '无人健创馆',
            },
            {
                'amount': 300,
                'storeName': '无人社创馆',
            },
            {
                'amount': 400,
                'storeName': '无人文创馆',
            },
            {
                'amount': 500,
                'storeName': '无人资创馆',
            },
        ]
    }

    ngOnInit() {
        this.changeTradeCount();
        this.showTime();
        this.nowTimer = setInterval(this.showTime, 1000);
    }

    changeTradeCount = () => {
        this.changeCount += 10;

        if (this.changeCount > this.currentCount) {
            this.timer = setInterval(this.quickChange, 100);
        }
    };

    quickChange = () => {
        const diff = this.changeCount - this.currentCount;

        if (diff > 0) {
            this.currentCount ++;
        }else {
            clearInterval(this.timer);
        }
    };

    showTime = () => {
        const weekdayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const year = today.getFullYear();
        const months = TimeUtil.checkTime(today.getMonth()+1);
        const date = TimeUtil.checkTime(today.getDate());
        const dayName = weekdayArray[today.getDay()];
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        // console.log(`${year}/${months}/${date}/${dayName}/${hours}/${minutes}/${seconds}`);
        this.timeObj.year = String(year);
        this.timeObj.month = months;
        this.timeObj.date = date;
        this.timeObj.dayName = dayName;
        this.timeObj.hour = String(hours);
        this.timeObj.minute = String(minutes);
        this.timeObj.seconds = String(today.getSeconds());
    }

    startAnimation = () => {
        console.log(111);
    }

}
