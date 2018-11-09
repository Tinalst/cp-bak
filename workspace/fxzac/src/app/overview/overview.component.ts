import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TransactionModel} from '../utils/models/transaction.model';
import {NodeInfoModel} from '../utils/models/nodeInfo.model';
import {EthinfoModel} from '../utils/models/ethinfo.model';

@Component({
        selector: 'app-overview',
        templateUrl: './overview.component.html',
        styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnChanges {

        @Input() dataList: TransactionModel ;
        nodeObj: NodeInfoModel;
        ethInofObj: EthinfoModel;

        circleColorArray: string[] = ['grey','grey', 'grey','yellow','yellow','yellow','green','green','green'];

        constructor() {
        }

        ngOnInit() {
                this.nodeObj = new NodeInfoModel(this.dataList);
                this.ethInofObj = new EthinfoModel(this.dataList);
        }

        ngOnChanges(changes: SimpleChanges): void {
                const dataList = changes.dataList.currentValue;
                if(dataList) {
                        switch (dataList.tag) {
                                case 'NODE_INFO':
                                        this.nodeObj = new NodeInfoModel(dataList);
                                        console.log(this.nodeObj);
                                        break;
                                case  'ETH_INFO':
                                        this.ethInofObj = new EthinfoModel(dataList);
                                        console.log(this.ethInofObj);
                                        break;
                        }
                }

        }

}
