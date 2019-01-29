import {environment} from '../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {
  constructor(private http: HttpClient){}
  // 请求路径域名+端口
  private baseUrl = environment.appConfig.remoteBaseUrl;

  // 请求头配置
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  // 拼接完整请求路径
  private concatEntryUrl(url: string): string {
    return `${this.baseUrl}${url}`;
  }

  /**
   * GET 请求处理
   * @param url 后台接口API 如:/api/test/test
   */
  public get(url: string): Observable<any> {
    return this.http.get(this.concatEntryUrl(url), this.httpOptions).pipe(
      map(this.handleResponse),
    )
  }

  /**
   * POST 请求处理
   * @param url 后台接口API
   * @param data 入参
   */
  public post(url: string, data = {}):Observable<any> {
    return this.http.post(this.concatEntryUrl(url), data, this.httpOptions).pipe(
      // 处理数据
      map(this.handleResponse)
    )
  }

  /**
   * PUT 请求处理
   * @param url 后台接口API
   * @param data 入参
   */
  public put(url: string, data = {}): Observable<any> {
    return this.http.put(this.concatEntryUrl(url), data, this.httpOptions).pipe(
      map(this.handleResponse)
    )
  }

  /**
   * DELETE 请求处理
   * @param url 后台接口API
   */
  public delete(url: string): Observable<any> {
    return this.http.delete(this.concatEntryUrl(url), this.httpOptions).pipe(
      map(this.handleResponse)
    )
  }

  /**
   * 处理请求体
   * @param res
   */
  private handleResponse(res: Response): any {
    if (res['code'] === 200) {
      if(res['data']) {
        return res['data'];
      } else {
        return {};
      }
    } else {
      this.handleStatusCode(res['code']);
    }
  }

  /**
   * 请求错误处理
   * @param error
   */
  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof  ErrorEvent) {
      console.error('an error occurred', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      )
    }
    return throwError('Something bad happened; please try again later.');
  }

  /**
   * 状态码处理
   * @param code
   */
  private handleStatusCode(code: number) {
      console.log(code);
  }
}

