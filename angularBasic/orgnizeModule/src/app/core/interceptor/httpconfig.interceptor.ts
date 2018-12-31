import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

/**
 * HTTP拦截器： 隐式拦截请求做一定的处理
 */
export class HttpconfigInterceptor implements HttpInterceptor{

  /**
   * 不做任何修改的传递一个请求
   * @param req
   * @param next
   * return: Observable<HttpEvent>
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return undefined;
  }

}
