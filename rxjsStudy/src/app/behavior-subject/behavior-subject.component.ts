import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
        selector: 'app-behavior-subject',
        templateUrl: './behavior-subject.component.html',
        styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

        observable: BehaviorSubject = new BehaviorSubject(0);       // 创建BehaviorSubject  指定默认参数为0

        constructor() {
        }

        ngOnInit() {
                this.subscribeBehaviorSubjectObservabe();
        }

        subscribeBehaviorSubjectObservabe = () => {
                // 订阅behaviorSubject
                this.observable.subscribe({
                        next: v => console.log(`behaviorobserver: ${v}`)
                });

                // 推送值
                this.observable.next(1);
                this.observable.next(2);

                // 订阅behaviorSubject
                this.observable.subscribe({
                        next: v => console.log(`behaviorobserver: ${v}`)
                })

        }
}
