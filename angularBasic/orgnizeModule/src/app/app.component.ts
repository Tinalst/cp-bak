import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Myi18Service} from './utils/service/myi18.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private translateService: TranslateService,
              private myi18Service: Myi18Service) {
    // 设置默认语言
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }
  ngOnInit(): void {
  }

  changeLang = () => {
    const currentLang = this.translateService.currentLang === 'en' ? 'zh' : 'en';
    this.myi18Service.changeLang(currentLang);
  }
}
