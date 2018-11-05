import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TimeModel} from '../util/models/time.model';
import {TimeUtil} from '../util/time.util';
import {AccountInfoListModel} from '../util/models/accountInfoList.model';
import {MonitorListModel} from '../util/models/monitorList.model';
import {NumberUtil} from '../util/number.util';
import {MonitorService} from './monitor.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
    changeCount: number = 200040905;
    timer;
    nowTimer;
    timeObj: TimeModel = new TimeModel();

    analysicInfo: Array<AccountInfoListModel> = [new AccountInfoListModel(),new AccountInfoListModel(),new AccountInfoListModel(),new AccountInfoListModel(),new AccountInfoListModel() ];
    monitorList: Array<MonitorListModel> = [];
    totalAmount: any = 0;
    totalAmountNumber: number = 0;

    ampliAnimation: boolean = false;                                    // 判断是否执行方形环动画
    @ViewChild('amplificationTop') amplificationTop: ElementRef;        // 方形环元素引用
    @ViewChild('amplificationMiddle') amplificationMiddle: ElementRef;  // 方形环元素引用
    @ViewChild('amplificationBottom') amplificationBottom: ElementRef;  // 方形环元素引用

    @ViewChild('singleCircle') singleCircle: ElementRef;                // 单线圆环元素引用
    @ViewChild('dotCircle') dotCircle: ElementRef;                      // 点缀圆环元素引用

    @ViewChild('rect0') rect0: ElementRef;

    requestTimer;                                                       // 请求计时器ID

    constructor(private render: Renderer2,
                private monitorService: MonitorService) {
    }

    ngOnInit() {
        this.reqMonitorDatas();
        this.requestTimer = setInterval(this.reqMonitorDatas, 1000);
        this.changeTradeCount();
        this.showTime();
        this.nowTimer = setInterval(this.showTime, 1000);
    }

    changeTradeCount = () => {
        this.changeCount += 10;

        if (this.changeCount > this.totalAmount) {
            this.timer = setInterval(this.quickChange, 100);
        }
    };

    quickChange = () => {
        const diff = this.changeCount - this.totalAmount;

        if (diff > 0) {
            this.totalAmount ++;
        }else {
            clearInterval(this.timer);
        }
    };

    /**
     * 功能： 动态更新时间计时器
     */
    showTime = () => {
        const weekdayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const year = today.getFullYear();
        const months = TimeUtil.checkTime(today.getMonth()+1);
        const date = TimeUtil.checkTime(today.getDate());
        const dayName = weekdayArray[today.getDay()];
        const hours = TimeUtil.checkTime(today.getHours());
        const minutes = TimeUtil.checkTime(today.getMinutes());
        const seconds = TimeUtil.checkTime(today.getSeconds());
        // console.log(`${year}/${months}/${date}/${dayName}/${hours}/${minutes}/${seconds}`);
        this.timeObj.year = String(year);
        this.timeObj.month = months;
        this.timeObj.date = date;
        this.timeObj.dayName = dayName;
        this.timeObj.hour = String(hours);
        this.timeObj.minute = String(minutes);
        this.timeObj.seconds = String(today.getSeconds());
    };

    /**
     * 功能： 改变矩形动画执行次数
     */
    changeAmpliAnimationCount = (): void => {
        (this.monitorList.length > 0) && (this.ampliAnimation = true);
        this.render.setStyle(this.amplificationTop.nativeElement, 'animation-iteration-count', this.monitorList.length);
        this.render.setStyle(this.amplificationMiddle.nativeElement, 'animation-iteration-count', this.monitorList.length);
        this.render.setStyle(this.amplificationBottom.nativeElement, 'animation-iteration-count', this.monitorList.length);
    };

    /**
     * 功能： 当订单数量大于三单加速圆盘转动速度
     */
    changeRotateSpeed = ():void => {
        if(this.monitorList.length > 3) {
            this.render.setStyle(this.singleCircle.nativeElement, 'animation-duration', '1s');
            this.render.setStyle(this.dotCircle.nativeElement, 'animation-duration', '1s');
        }else {
            this.render.setStyle(this.singleCircle.nativeElement, 'animation-duration', '2s');
            this.render.setStyle(this.dotCircle.nativeElement, 'animation-duration', '2.5s');
        }
    };

    setRectWidth = (): void => {
        this.render.setStyle(this.rect0.nativeElement, 'width', `${(this.analysicInfo[0].amount*300)/1800}`);
    };

    test = (): void => {
        const before = JSON.stringify(this.analysicInfo);
        this.analysicInfo[0].amount = 300;
        const after =  JSON.stringify(this.analysicInfo);
        // console.log(before === after);
    };

    reqMonitorDatas = () => {
        this.monitorService.getMonitorDatas().subscribe(res => {

            if(res['code'] === 200) {

                this.analysicInfo = res['data']['accountInfoList'];
                this.setRectWidth();

                if(res['data']['monitorList'].length > 0) {
                    this.monitorList = res['data']['monitorList'];
                    this.changeAmpliAnimationCount();
                    this.changeRotateSpeed();
                }

                this.totalAmountNumber = res['data']['totalAmount'];
                this.totalAmount = NumberUtil.toThousands(res['data']['totalAmount']);

            }else {
                alert(`数据请求出错${res['code']}`);
            }
        })
    };

}
