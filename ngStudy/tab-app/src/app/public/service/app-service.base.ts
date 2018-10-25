import {environment} from "../../../environments/environment";
import {HttpHeaders} from "@angular/common/http";

export class AppServiceBase {
    protected baseUrl = environment.appconfig.remoteBaseUrl;
    protected options = {
        headers: new HttpHeaders({
            'Content-type': 'application/json',
        })
    };

    protected getFullUrl(url: string): string {
        return this.baseUrl + url;
    }
}
