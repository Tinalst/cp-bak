import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';

@Component({
        selector: 'app-from-event',
        templateUrl: './from-event.component.html',
        styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {
        @ViewChild( 'btn' ) btn: ElementRef;
        constructor() {
        }

        ngOnInit() {
                // 执行事件绑定
                this.bindClick();
        }

        bindClick = () => {
                // 为按钮绑定监听click事件并定义事件的处理内容
                fromEvent(this.btn.nativeElement, 'click')
                        .subscribe(() => {
                                console.log('clicked');
                        })
        };
}
