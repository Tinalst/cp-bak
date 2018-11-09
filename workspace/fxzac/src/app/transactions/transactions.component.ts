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
                        this.ethInofObj = new EthinfoModel(dataList);
                        console.log(this.ethInofObj);
                }
        }

}
