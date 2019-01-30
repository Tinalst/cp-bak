import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class StatusCodeService {

  constructor(private translateService: TranslateService) { }

  tranStatusCode = (code?: number) => {
    switch (code) {
      case 200:
        this.translateService.instant('error.200');
        break;
      case 300:
        this.translateService.instant('error.300');
        break;
      case 301:
        this.translateService.instant('error.301');
        break;
      case 400:
        this.translateService.instant('error.400');
        break;
      case 401:
        this.translateService.instant('error.401');
        break;
      case 500:
        this.translateService.instant('error.500');
        break;
    }
  }
}
