import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {
        redueTimeNumber;
        transform(time: any, args?: any): any {
                if(!time) {return '0s '};

                if(time) {
                        this.redueTimeNumber =  this.reduceTime(time);
                        return this.redueTimeNumber;
                }
        }

        reduceTime(time: number)  {
                        const now = new Date();
                        const reduce = now.getTime() - time;
                        const date = parseInt(String(reduce % 1000));
                        if(date > 1000 ) {
                                const dates = parseInt(String(reduce /1000));
                                const days = parseInt(String(dates / 60 / 60 / 24));
                                const hours = parseInt(String(dates / 60 / 60 % 24));
                                const minutes = parseInt(String(dates / 60 % 60));
                                const seconds = parseInt(String((dates % 60)));

                                return`${days > 0 ? `${days}d(s)` : ''}
                                ${hours > 0 ? `${hours}h(s)` : ''}
                                ${minutes > 0 ? `${minutes}m(s)` : ''}
                                ${seconds > 0 ? `${seconds}s` : ''}
                                 `;
                        }else {
                                const ms = date;
                                return `${ms}ms  `;
                                // return '0s ';
                        }
        }

}
