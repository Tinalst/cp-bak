import {Pipe, PipeTransform} from '@angular/core';
import {NumberUtil} from '../number.util';

@Pipe({
  name: 'number3dots'
})
export class Number3dotsPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return NumberUtil.toThousands(value);
  }

}
