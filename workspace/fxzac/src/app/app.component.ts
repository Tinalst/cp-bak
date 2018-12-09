import {Component, OnInit} from '@angular/core';
import {TransationService} from './service/transation.service';
import {ToolsUtil} from './utils/tools.util';
import {TransactionModel} from './utils/models/transaction.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dataList: TransactionModel;

  constructor(private transationService: TransationService) {
  }

  ngOnInit(): void {
    this.transationService.reqTransaction().subscribe(res => {
      this.dataList = new TransactionModel(ToolsUtil.String2Json(res.data));
    })
  }


}
