export class NodeInfoModel {
        name: string;
        ip: string;
        nodeNumbe: number;
        clientConnected: number;
        allClient: number;
        peers: Array<object>;

        constructor(obj?) {
                this.name = obj && obj['name'] || '';
                this.ip = obj && obj['ip'] || '';
                this.nodeNumbe = obj && obj['nodeNumbe'] || 0;
                this.clientConnected = obj && obj['clientConnected'] || 0;
                this.allClient = obj && obj['allClient'] || 0;
                this.peers = obj && obj['peers'] || [];
        }

}
