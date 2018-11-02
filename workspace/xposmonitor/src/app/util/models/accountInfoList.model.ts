export class AccountInfoListModel {

    amount: string;     // 金额
    percent: string;    // 百分比，前端自己添加%
    storeName: string   // 门店名称

    constructor(obj?) {
        this.amount = obj && obj['amount'] || '';
        this.percent = obj && obj['percent'] || '';
        this.storeName = obj && obj['storeName'] || '';
    }
}
