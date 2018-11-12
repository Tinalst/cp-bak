import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {

        transform(time: any, args?: any): any {
                if(!time) {return '0ms'};
                if(time) {
                        return this.reduceTime(time);
                }
        }

        reduceTime(time: number)  {
                // if(time) {
                        const now = new Date();
                        const reduce = now.getTime() - time;
                        const date = parseInt(String(reduce % 1000));
                        if(date > 1000 ) {
                                const dates = parseInt(String(reduce /1000));
                                const days = parseInt(String(date / 60 / 60 / 24));
                                const hours = parseInt(String(date / 60 / 60 % 24));
                                const minutes = parseInt(String(date / 60 % 60));
                                const seconds = parseInt(String((date % 60)));
                                const ms = date;

                                return`${days > 0 ? `${days}d(s)` : ''}
                                ${hours > 0 ? `${hours}h(s)` : ''}
                                ${minutes > 0 ? `${minutes}m(s)` : ''}
                                ${seconds > 0 ? `${seconds}s` : ''}
                                ${ms > 0 ? `${ms}ms` : ''}
                                 `;
                        }else {
                                const ms = date;
                                return `${ms}ms  `;
                        }
        }

}
