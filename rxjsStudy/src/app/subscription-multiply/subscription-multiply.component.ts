import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, interval, Observable, Subscription} from 'rxjs';

@Component({
        selector: 'app-subscription-multiply',
        templateUrl: './subscription-multiply.component.html',
        styleUrls: ['./subscription-multiply.component.scss']
})
export class SubscriptionMultiplyComponent implements OnInit , OnDestroy{

        observable1: Observable<any>;                        // 被观察者1
        observable2: Observable<any>;                        // 被观察者2

        subscription: Subscription;                                // 订阅对象
        childSubscription: Subscription;                       // 订阅对象

        @ViewChild('btn') btn: ElementRef;                    // 按钮元素引用
        @ViewChild('childBtn') childBtn: ElementRef;   // 按钮元素引用

        constructor() {
        }

        ngOnInit() {
                // 创建被观察者
                this.createObservable();
                // 订阅被观察者
                this.subscribeObservable();
                // 为元素添加click事件并绑定取消订阅操作
                this.bindClick();
        }

        createObservable = () => {
                // 创建被观察者
                this.observable1 = interval(400);
                this.observable2 = interval(300);
        };

        subscribeObservable = () => {
                // 订阅被观察者返回订阅对象
                this.subscription = this.observable1.subscribe(x => console.log(x));
                this.childSubscription = this.observable2.subscribe(x => console.log(x));

                // 添加子订阅对象
                this.subscription.add(this.childSubscription);

        };

        cancleSubscription = () => {
                // 同时取消两个订阅对象的订阅
                this.subscription.unsubscribe();
        };

        bindClick = () => {
                // 为元素定义、绑定click监听事件
                fromEvent(this.btn.nativeElement, 'click')
                        .subscribe(() => {
                                // 执行取消订阅操作
                                this.cancleSubscription();
                        });
                fromEvent(this.childBtn.nativeElement, ' click')
                        .subscribe(() => {
                                this.removeChildSubscription();
                        })
        };

        removeChildSubscription = () => {
                // 撤销已添加的子订阅对象
                this.subscription.remove(this.childSubscription);
        };

        ngOnDestroy(): void {
                this.cancleSubscription();

        }

}
