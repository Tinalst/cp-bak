import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppServiceBase} from '../util/service/app-service.base';
import {monitorApiUrls} from '../util/enum/api.enum';

@Injectable({
  providedIn: 'root'
})
export class MonitorService extends AppServiceBase{

    constructor(private http: HttpClient) {
        super();
    }

    getMonitorDatas = () => {
        const url = this.fullUrl(monitorApiUrls.accountApi);
        return this.http.post(url, {});
    }
}
