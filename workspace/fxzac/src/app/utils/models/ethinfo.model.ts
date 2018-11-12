export class EthinfoModel {
        // blockHeight: number;
        // transactionCount: number;
        // contractNumber: number;
        transaction: Array<object>;

        constructor(obj?) {
                // this.blockHeight = obj && obj['blockHeight'] || 0;
                // this.transactionCount = obj && obj['transactionCount'] || 0;
                // this.contractNumber = obj && obj['contractNumber'] || 0;
                this.transaction = obj && obj['transaction'] || [];
        }
}
