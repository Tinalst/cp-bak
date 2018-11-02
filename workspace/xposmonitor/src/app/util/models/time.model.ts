export class TimeModel {
    year: string;
    month: string;
    date: string; // 一个月的那一天
    day: string;  // 一个礼拜得那一天
    dayName: string;
    hour: string;
    minute: string;
    seconds: string;

    constructor(obj?) {
        this.year = obj && obj['year'] || '' ;
        this.month = obj &&  obj['month'] || '';
        this.day = obj && obj['day'] || '';
        this.dayName = obj && obj['dayName'] || '';
        this.hour = obj && obj['hour'] || '';
        this.minute = obj && obj['minute'] || '';
        this.seconds = obj && obj['seconds'] || '';
    }
}
