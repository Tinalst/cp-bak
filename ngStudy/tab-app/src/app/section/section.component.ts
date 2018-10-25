import { Component, OnInit } from '@angular/core';
import {TabMenuInterface} from "../public/model/tab-menu.interface";
import {TabService} from "../service/tab.service";
import {ProductModel} from "../public/model/product.model";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
    currentClick: string = '1';
    tabMenu: TabMenuInterface[];
    productList: ProductModel[];
    haveProductList: boolean;

    constructor(private tabService: TabService) { }

    ngOnInit() {
        this.getTablMenu();
    }

    getTablMenu = (): void => {
        this.tabMenu = [
            {
                uuid: '1',
                name: '爆款',
                sku: '1'
            },{
                uuid: '2',
                name: '最新',
                sku: '2'
            },{
                uuid: '3',
                name: '主编推荐',
                sku: '3'
            }
        ]
    };

    getselectId = (uuid: string): void => {
        this.currentClick =uuid;
    };

    reqProductList = (menu: TabMenuInterface): void => {
        this.getselectId(menu.uuid);
        if(!(menu.sku === '2')) {
            this.haveProductList = false;
            this.productList = [];
            return;
        };
        this.tabService.reqProductList(menu.sku).subscribe(data => {
            const res = data['res'];
            if(res['errocode'] === '00001'){
                this.haveProductList = true;
                this.productList = res['data'];
            }else {
                alert('数据请求失败');
            }
        });
    };


}
