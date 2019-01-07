import {environment} from '../../../environments/environment';
import {HttpHeaders} from '@angular/common/http';

export class HttpServiceBase {
  // 请求路径域名+端口
  private baseUrl = environment.appConfig.remoteBaseUrl;

  // 请求头配置
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  
}

