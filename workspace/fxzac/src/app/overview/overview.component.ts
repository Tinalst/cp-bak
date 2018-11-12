import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TransactionModel} from '../utils/models/transaction.model';
import {NodeInfoModel} from '../utils/models/nodeInfo.model';
import {EthinfoModel} from '../utils/models/ethinfo.model';
import {HeightTransactionModel} from '../utils/models/heightTransaction.model';

@Component({
        selector: 'app-overview',
        templateUrl: './overview.component.html',
        styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnChanges {

        @Input() dataList: TransactionModel ;
        nodeObj: NodeInfoModel;
        ethInofObj: EthinfoModel;
        heightTransactionObj: HeightTransactionModel;

        circleColorArray: string[] = ['grey','grey', 'grey','yellow','yellow','yellow','green','green','green','green'];

        constructor() {
        }

        ngOnInit() {
                this.nodeObj = new NodeInfoModel(this.dataList);
                this.ethInofObj = new EthinfoModel(this.dataList);
                this.heightTransactionObj = new HeightTransactionModel(this.dataList);
        }

        ngOnChanges(changes: SimpleChanges): void {
                const dataList = changes.dataList.currentValue;
                if(dataList) {
                        switch (dataList.tag) {
                                case 'NODE_INFO':
                                        this.nodeObj = new NodeInfoModel(dataList);
                                        if(this.nodeObj.peers.length > 0) {
                                                this.nodeObj.peers = this.nodeObj.peers.sort((a, b) => {
                                                        return b['credit'] - a['credit'];
                                                });
                                        }
                                        break;
                                case  'ETH_INFO':
                                        this.heightTransactionObj = new HeightTransactionModel(dataList);
                                        break;
                                case  'TX':
                                        this.ethInofObj = new EthinfoModel(dataList);
                                        break;

                        }
                }
        }


}
