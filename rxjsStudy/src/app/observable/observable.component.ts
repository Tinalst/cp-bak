import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, Subscription} from 'rxjs';

@Component({
        selector: 'app-observable',
        templateUrl: './observable.component.html',
        styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
        @ViewChild('btn') btn: ElementRef;
        observable: any;                                    // 被观察者
        subscription: Subscription;                                 // 订阅对象

        constructor() {
        }

        ngOnInit() {
                // 创建一个被观察者
                this.createObservable();
                // 为按钮绑定监听事件
                this.bindClick();

        }

        // 创建一个被观察者
        createObservable = () => {
                // 创建观察者对象
                this.observable = Observable.create(observer => {
                        // 推送
                        observer.next(1);
                        observer.next(2);
                        observer.next(3);
                        setTimeout(() => {
                                observer.next(4);
                                // complete() 不再发送值， 此代码一下的代码也不会再发送
                                observer.complete();
                        }, 1000);
                })
                console.log('观察者对象创建完成');
        }

        // 为按钮绑定监听事件触发订阅操作
        bindClick = () => {
                fromEvent(this.btn.nativeElement, 'click')
                        .subscribe(() => {
                                this.subscribleObservable();
                        })
        }

        // 订阅被观察者
        subscribleObservable = () => {
                // 订阅被观察者
                this.subscription = this.observable.subscribe({
                        // 执行Observables
                        // next： 发送一个值
                        next: x => console.log(`got value ${x}`),
                        // error: 发送一个JS错误或异常
                        error: err => console.log(`something wrong${err}`),
                        // complete： 不再发送任何值
                        complete: () => console.log(`done 订阅完成`)
                });
                console.log('订阅中');
                console.log('清理observable');
                // 清理观察者： 如果有异步执行的代码晚于清理代码的执行，异步执行代码会执行没有完全就被清理掉
                this.subscription.unsubscribe();
                console.log('清理成功');
        }


}
