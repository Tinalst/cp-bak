import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppServiceBase} from "../public/service/app-service.base";
import {productApiUrls} from "../public/model/api.enum";

@Injectable({
  providedIn: 'root'
})
export class TabService extends AppServiceBase{

    constructor(private http: HttpClient) {
        super();
    }

    /**
     * 获取商品列表
     * @param {string} sku
     */
    reqProductList = (sku: string) => {
        const url = this.getFullUrl(productApiUrls.list);
        return this.http.get(url, this.options);
    }
}
