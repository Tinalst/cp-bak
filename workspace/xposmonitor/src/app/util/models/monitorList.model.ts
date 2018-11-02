export class MonitorListModel {
    amount: number;
    storeName: string;

    constructor(obj) {
        this.amount = obj && obj['amount'] || '';
        this.storeName = obj && obj['storeName'] || '';
    }
}
