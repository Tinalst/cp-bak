import {Injectable} from '@angular/core';
import {WebsocketService} from './websocket.service';
import {map} from 'rxjs/operators';

const  TRANSACTION_URL = 'ws://192.168.21.171:8080/api/v1/node';

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
