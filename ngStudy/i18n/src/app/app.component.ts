import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        // 设置默认语言
        translate.setDefaultLang('de');
    }

    useLanguage = (lang: string): void => {
        this.translate.use(lang);
    }
}

