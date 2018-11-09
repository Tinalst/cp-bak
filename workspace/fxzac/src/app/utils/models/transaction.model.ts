export class TransactionModel {
        name: string;
        ip: string;
        nodeNumbe: number;
        clientConnected: number;
        allClient: number;

        blockHeight: number;
        transactionCount: number;
        contractNumber: number;

        peers: Array<object>;
        transaction: Array<object>;

        tag: string;

        constructor(obj?) {
                this.name = obj && obj['nodeInfo']['name'] || '';
                this.ip = obj && obj['nodeInfo']['ip'] || '';
                this.nodeNumbe = obj && obj['nodeInfo']['nodeNumbe'] || 0;
                this.clientConnected = obj && obj['nodeInfo']['clientConnected'] || 0;
                this.allClient = obj && obj['nodeInfo']['allClient'] || 0;

                this.blockHeight = obj && obj['ethInfo']['blockHeight'] || 0;
                this.transactionCount = obj && obj['ethInfo']['transactionCount'] || 0;
                this.contractNumber = obj && obj['ethInfo']['contractNumber'] || 0;

                this.peers = obj && obj['nodeInfo']['peers'] || [];
                this.transaction = obj && obj['ethInfo']['transaction'] || [];

                this.tag = obj && obj['tag'] || '';
        }
}
