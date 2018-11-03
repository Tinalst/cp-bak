export class TicketModel {
    amount: number;
    storeName: string;
    constructor(obj?) {
        this.amount = obj && obj['amount'] || 0;
        this.storeName = obj && obj['storeName'] || '';
    }
}
