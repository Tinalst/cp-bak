import {Component, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';

@Component({
        selector: 'app-subscription',
        templateUrl: './subscription.component.html',
        styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

        obserable: Observable<any>;          // 可观察对象
        subscription: Subscription;   // 订阅对象
        constructor() {
        }

        ngOnInit() {
                // 创建可观察对象
                this.createObservable();
                // 订阅可观察对象
                this.subscribeObserable();
        }

        // 创建可观察对象
        createObservable = () => {
                // interval 返回可观察对象
                this.obserable = interval(1000);
        };

        // 订阅可观察对象
        subscribeObserable = () => {
                // 订阅可观察对象 返回订阅对象
                this.subscription = this.obserable.subscribe(x => {
                        // 回调中的是观察者
                        console.log(x);
                });

                // 取消订阅
                this.subscription.unsubscribe();
        };
}
