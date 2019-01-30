import { Pipe, PipeTransform } from '@angular/core';
import {TimeUtil} from "../../tools/time.util";

@Pipe({
  name: 'NglstTime'
})
export class NglstTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value) {
      return this.seconds2ymdhms(value);
    }

  }

  /**
   *  功能： 毫秒数-> yyyy-mm-dd hh:min:sec
   * */
  seconds2ymdhms(second) {
    const today = new Date(second);
    const year = today.getFullYear();
    const months = TimeUtil.checkTime({t: today.getMonth()+1});
    const date = TimeUtil.checkTime({t :today.getDate()});
    const hours = TimeUtil.checkTime({t: today.getHours()});
    const minutes = TimeUtil.checkTime({t: today.getMinutes()});
    const seconds = TimeUtil.checkTime({t: today.getSeconds()});
    return `${year}-${months}-${date} ${hours}:${minutes}:${seconds}`;
  }

  /**
   *  功能： 毫秒数-> weekday yyyy-mm-dd hh:min:sec
   * */
  seconds2ymdwhms(time) {
    const weekdayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date(second);
    const year = today.getFullYear();
    const months = TimeUtil.checkTime({t: today.getMonth()+1});
    const date = TimeUtil.checkTime({t :today.getDate()});
    const dayName = weekdayArray[today.getDay()];
    const hours = TimeUtil.checkTime({t: today.getHours()});
    const minutes = TimeUtil.checkTime({t: today.getMinutes()});
    const seconds = TimeUtil.checkTime({t: today.getSeconds()});
    return `${dayName} ${year}-${months}-${date} ${hours}:${minutes}:${seconds}`;

  }

  // const weekdayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // const today = new Date(second);
  // const year = today.getFullYear();
  // const months = TimeUtil.checkTime({t: today.getMonth()+1});
  // const date = TimeUtil.checkTime({t :today.getDate()});
  // const dayName = weekdayArray[today.getDay()];
  // const hours = TimeUtil.checkTime({t: today.getHours()});
  // const minutes = TimeUtil.checkTime({t: today.getMinutes()});
  // const seconds = TimeUtil.checkTime({t: today.getSeconds()});
  // // console.log(`${year}/${months}/${date}/${dayName}/${hours}/${minutes}/${seconds}`);
  // // this.timeObj.year = String(year);
  // // this.timeObj.month = months;
  // // this.timeObj.date = date;
  // // this.timeObj.dayName = dayName;
  // // this.timeObj.hour = String(hours);
  // // this.timeObj.minute = String(minutes);
  // // this.timeObj.seconds = String(today.getSeconds());
  // return `${year}-${months}-${date} ${hours}:${minutes}:${seconds}`;
}
