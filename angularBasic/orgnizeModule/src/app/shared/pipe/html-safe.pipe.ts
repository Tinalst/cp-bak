import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

/**
 * html安全限制管道
 */
@Pipe({
  name: 'htmlSafe'
})
export class HtmlSafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer){}
  transform(value: any, args?: any): any {
    if(value) {
      return this.domSanitizer.bypassSecurityTrustUrl(value)
    }else {
      return null;
    }
  }

}
