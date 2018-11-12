export class HeightTransactionModel {
        blockHeight: number;
        transactionCount: number;
        contractNumber: number;

        constructor(obj? ) {
                this.blockHeight = obj && obj['blockHeight'] || 0;
                this.transactionCount = obj && obj['transactionCount'] || 0;
                this.contractNumber = obj && obj['contractNumber'] || 0;
        }
}
