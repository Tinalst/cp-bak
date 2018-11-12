import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TransactionModel} from '../utils/models/transaction.model';
import {NodeInfoModel} from '../utils/models/nodeInfo.model';
import {EthinfoModel} from '../utils/models/ethinfo.model';

@Component({
        selector: 'app-transactions',
        templateUrl: './transactions.component.html',
        styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnChanges {

        @Input() dataList: TransactionModel ;
        ethInofObj: EthinfoModel;

        constructor() {
        }

        ngOnInit() {
                this.ethInofObj = new EthinfoModel(this.dataList);
        }

        ngOnChanges(changes: SimpleChanges): void {
                const dataList = changes.dataList.currentValue;
                if(dataList) {
                        this.ethInofObj.transaction = new EthinfoModel(dataList).transaction.concat(this.ethInofObj.transaction);
                }
        }

        reduceTime(time: number)  {
                if(time) {
                        const now = new Date();
                        const date = parseInt(String((now.getTime() - time) / 1000));
                        const days = parseInt(String(date / 60 / 60 / 24));
                        const hours = parseInt(String(date / 60 / 60 % 24));
                        const minutes = parseInt(String(date / 60 % 60));
                        const seconds = parseInt(String((date % 60)));
                        const ms = date;

                        const result = `${days > 0 ? `${days}d(s)` : ''}
                        ${hours > 0 ? `${hours}h(s)` : ''}
                        ${minutes > 0 ? `${minutes}m(s)` : ''}
                        ${seconds > 0 ? `${seconds}s` : ''}
                        ${ms > 0 ? `${ms}ms` : ''}
                         `;

                        if (result) {
                                // console.log('========start=======');
                                // console.log(now.getTime())
                                // console.log('time', time)
                                // console.log(this.ethInofObj);
                                // console.log(now.getTime() - time);
                                // console.log(date)
                                // console.log(days)
                                // console.log(hours)
                                // console.log(minutes)
                                // console.log(seconds)
                                // console.log(ms)
                                // console.log('result', result)
                                // console.log('========end=======');

                                return result;
                        } else {
                                return '0';
                        }

                }else {
                        return '0ms ';
                }
        }


}
