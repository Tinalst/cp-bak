import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
        selector: 'app-subject-observabel',
        templateUrl: './subject-observabel.component.html',
        styleUrls: ['./subject-observabel.component.scss']
})
export class SubjectObservabelComponent implements OnInit {

        // 创建subject主体对象，是一种特殊的多播被观察者
        observable: Subject = new Subject();

        constructor() {
        }

        ngOnInit() {
                this.subscribeSubjectObservable();
                this.createSubjectOvservable();
        }

        // 创建subject多播可被观察者
        createSubjectOvservable = () => {
                // 发送数据
                this.observable.next(1);
                this.observable.next(2);
        }

        subscribeSubjectObservable = () => {
                // 订阅被观察者
                this.observable.subscribe({
                        next: v => console.log(`observera: ${v}`)
                });
                // 订阅被观察者
                this.observable.subscribe({
                        next: v => console.log(`observerb: ${v}`)
                })
        }

}
