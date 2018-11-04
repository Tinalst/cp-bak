import {environment} from '../../../environments/environment';
import {HttpHeaders} from '@angular/common/http';

export abstract class AppServiceBase {
    protected  baseUrl = environment.appcofig.remoteBaseUrl;
    protected options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    protected fullUrl(url: string): string {
        return this.baseUrl + url;
    }

    protected json2stringfy(obj: {}): string {
        return JSON.stringify(obj);
    }
}
