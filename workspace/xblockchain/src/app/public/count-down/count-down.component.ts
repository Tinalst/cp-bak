import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
    days: string = '000';
    hours: string = '00';
    minutes: string = '00';
    seconds: string = '00';
    isShow: boolean = true;
    timer;

    constructor() {

     }

    ngOnInit() {
        this.showTime();
        this.timer = setInterval(this.showTime, 1000);
    }

    checkTime = (t, type?): string => {
        if (type === 3 ) {
            return this.checkThreeLength(t);
        } else {
            if (t < 10) {
                return `0${t}`;
            }else {
                return `${t}`;
            }
        }
    }

    checkThreeLength = (t) => {
        if (t < 10) {
            return `00${t}`;
        } else if ( t < 100) {
            return `0${t}`;
        } else {
          return `${t}`;
        }
    }

    showTime = () => {
        const timeDate = new Date('2019/09/10, 10:10:33');
        const now = new Date();
        const date = parseInt(String((timeDate.getTime() - now.getTime()) / 1000));

        if (date < 0) {
            this.isShow = false;
            clearInterval(this.timer);
        }else {
            const day = parseInt(String(date / 60 / 60 / 24));
            this.days = this.checkTime(day, 3);
            this.hours = this.checkTime(parseInt(String(date / 60 / 60 % 24)));
            this.minutes = this.checkTime(parseInt(String(date / 60 % 60)));
            this.seconds = this.checkTime(parseInt(String((date % 60))));
            // this.days = String(parseInt(String(day)));
            // this.hours = String(parseInt(String(hour)));;
            // this.minutes =String(parseInt(String(minute)));;
            // this.seconds = String(parseInt(String(second)));;
        }

    }

}
