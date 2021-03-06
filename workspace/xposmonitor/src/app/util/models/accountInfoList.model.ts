export class AccountInfoListModel {
    storeId: number;
    amount: number;      // 金额
    percent: number;     // 百分比，前端自己添加%
    storeName: string;   // 门店名称

    constructor(obj?) {
        this.storeId = obj && obj['storeId'] || 0;
        this.amount = obj && obj['amount'] || 0;
        this.percent = obj && obj['percent'] || 0;
        this.storeName = obj && obj['storeName'] || '';
    }
}
