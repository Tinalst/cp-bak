import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class Myi18Service {

  constructor(private t: TranslateService) { }

  /**
   * 全局语言切换服务
   * @param lang
   */
  changeLang = (lang: string): void =>{
    this.t.use(lang);
  }
}
