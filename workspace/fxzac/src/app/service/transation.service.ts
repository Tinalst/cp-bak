import {Injectable} from '@angular/core';
import {WebsocketService} from './websocket.service';
import {environment} from '../../environments/environment';
import {ToolsUtil} from '../utils/tools.util';

// const  TRANSACTION_URL = 'ws://192.168.21.171:8080/api/v1/node';

const  TRANSACTION_URL = `ws://${ToolsUtil.getLocalhost()}/api/v1/node`;

@Injectable({
        providedIn: 'root'
})
export class TransationService {

        constructor(private websocketService: WebsocketService) {
        }

        reqTransaction = () => {
                return  this.websocketService.connect(TRANSACTION_URL);
        }
}
