import {Component, Input, OnInit} from '@angular/core';
import {AccountInfoListModel} from '../util/models/accountInfoList.model';

@Component({
  selector: 'app-right-analysic',
  templateUrl: './right-analysic.component.html',
  styleUrls: ['./right-analysic.component.scss']
})
export class RightAnalysicComponent implements OnInit {
    @Input analysicInfo: AccountInfoListModel [] = [];
    constructor() { }

    ngOnInit() {
    }

}
