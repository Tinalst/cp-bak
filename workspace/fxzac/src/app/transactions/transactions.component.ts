import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {TransactionModel} from '../utils/models/transaction.model';
import {EthinfoModel} from '../utils/models/ethinfo.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnChanges, OnDestroy {

  @Input() dataList: TransactionModel;
  ethInofObj: EthinfoModel;

  timeArray: any [] = [];
  count: number = 0;
  countA: number = 0;
  newArr: any;

  intervalTimer;

  constructor() {
  }

  ngOnInit() {
    this.ethInofObj = new EthinfoModel(this.dataList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const dataList = changes.dataList.currentValue;
    if (dataList) {
      if (dataList.tag === 'TX') {
        if (this.count === 0) {
          const test = new EthinfoModel(dataList);
          const first = test.transaction.reverse();
          this.newArr = first;
          this.ethInofObj.transaction = this.newArr;
          this.count = 1;
        } else {
          this.newArr = (new EthinfoModel(dataList).transaction.reverse()).concat(this.newArr);
          this.ethInofObj.transaction = this.newArr;
        }
        this.changeBeforeTime();
      }

    }
  }

  changeBeforeTime = () => {
    this.timeArray = this.ethInofObj.transaction.map((value, index) => {
      return this.reduceTime(value['time']);
    })
    setTimeout(() => {
      this.changeBeforeTime()
    }, 1000)
  };

  reduceTime(time: number) {
    const now = new Date();
    const reduce = now.getTime() - time;
    const date = parseInt(String(reduce % 1000));
    if (reduce > 1000) {
      const dates = parseInt(String(reduce / 1000));
      const days = parseInt(String(dates / 60 / 60 / 24));
      const hours = parseInt(String(dates / 60 / 60 % 24));
      const minutes = parseInt(String(dates / 60 % 60));
      const seconds = parseInt(String((dates % 60)));

      return `${days > 0 ? `${days}d(s)` : ''}
                                ${hours > 0 ? `${hours}h(s)` : ''}
                                ${minutes > 0 ? `${minutes}m(s)` : ''}
                                ${seconds > 0 ? `${seconds}s` : ''}
                                 `;
    } else {
      const ms = date;
      // return `${ms}ms  `;
      return '0s ';
    }
  }

  ngOnDestroy(): void {
    // clearInterval(this.intervalTimer);
  }


}
