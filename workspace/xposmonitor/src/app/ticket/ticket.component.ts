import {Component, Input, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {MonitorListModel} from '../util/models/monitorList.model';
import {TicketModel} from '../util/models/ticket.model';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss'],
    animations: [
        trigger('showTickets', [
            state('show', style({
                opacity: 0
            })),
            transition('* => show', [
                animate('1s linear', keyframes([
                    style({
                        opacity: 1,
                        transformOrigin: '-50%',
                        transform: 'translateY(-100px)',
                        offset: 1
                    })
                ]))
            ])
        ])
    ]
})
export class TicketComponent implements OnInit {
    @Input() monitorList: MonitorListModel[] = [];   // 订单数据
    isShow: string ;
    ticketObj: TicketModel = new TicketModel();
    constructor() { }

    ngOnInit() {
        this.showTicket();
    }

    /**
     * 功能： 当有新订单生成时候控制模态框显示
     */
    showTicket = ():void => {
        if(this.monitorList.length > 0) {
            this.ticketObj = new TicketModel(this.monitorList[0]);
            this.isShow = 'show';
        }
    };

    /**
     * 功能： 监听动画执行结束事件判断是否重新播放动画
     * @param {AnimationEvent} event
     */
    onAnimationEvent = (event: AnimationEvent) => {
        // console.log(event);
        this.isShow = '';
        if(event['fromState'] === 'show' && event['phaseName'] === 'done') {
            this.animationDone();
        }
    };

    /**
     * 功能： 移除被展示过的数据
     */
    animationDone = () => {
        // console.log(this.monitorList);
        this.monitorList.shift();
        // console.log(this.monitorList);
        this.showTicket();
    }

}
