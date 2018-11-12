import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'tx'
})
export class TxPipe implements PipeTransform {

        transform(value: any, args?: any): any {
                if(value.length > 25) {
                        return` ${ value.substring(1, 25)} ...`
                }else {
                        return null;
                }
        }

}
