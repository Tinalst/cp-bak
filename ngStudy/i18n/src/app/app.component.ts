import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {UtilService} from './public/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private translate: TranslateService,
                private router: Router,
                public utilService: UtilService) {
        // 设置默认语言
        translate.setDefaultLang('de');
    }

    jumper = (url: string): void => {
        this.router.navigate([`../${url}`]);
    }
}

