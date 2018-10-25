import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

    constructor(private translate: TranslateService) { }

     // 语言切换
    useLanguage = (lang: string): void => {
         this.translate.use(lang);
    }
}
