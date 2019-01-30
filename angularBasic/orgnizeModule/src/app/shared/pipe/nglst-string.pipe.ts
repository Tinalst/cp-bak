import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'nglstString'
})
export class NglstString implements PipeTransform {
  /**
   * 字符串管道
   * @param value 管道接收值
   * @param methods 执行方法
   * @param range   可选参数
   */
  transform(value: any, methods: number, range?: number): any {

    switch (methods) {
      case 1 :
        NglstString.omitString(value, range);
        break;
    }
  }

  /**
   * 字符串超出省略
   * @param value 字符串
   * @param range 超出范围
   */
  static omitString = (value, range) =>{
    if (value.length > range) {
      return ` ${ value.substring(0, range)} ...`
    } else {
      return value;
    }
  }
}
