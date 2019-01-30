export class TimeUtils {
  /**
   * 两位数时间补零修正
   * @param t
   * @param type
   */
  static zeroPadding ({t}){
    if (t < 10) {
      return `0${t}`;
    }else {
      return `${t}`;
    }
  }

  /**
   * 三位数时间补零修正
   * @param t
   */
  static zeroPaddingPro (t)  {
    if (t < 10) {
      return `00${t}`;
    } else if ( t < 100) {
      return `0${t}`;
    } else {
      return `${t}`;
    }
  }

  /**
   * 时间戳倒计时
   * @param timestamp
   */
  static timestampCd(timestamp) {
    let countDownTime;
    setInterval(function () {
      const nowTime = new Date();
      const endTime = new Date(timestamp * 1000);

      const t = endTime.getTime() - nowTime.getTime();
      let hour = Math.floor(t / 1000 / 60 / 60 % 24);
      let min = Math.floor(t / 1000 / 60 % 60);
      let sec = Math.floor(t / 1000 % 60);

      if (hour < 10) {
        hour = Number('0' + hour);
      }
      if (min < 10) {
        min = Number('0' + min);
      }
      if (sec < 10) {
        sec = Number('0' + sec);
      }
      countDownTime = hour + ':' + min + ':' + sec;

    }, 1000);
  }

}
