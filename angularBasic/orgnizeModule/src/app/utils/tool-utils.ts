import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

// 表单工具类
export class FormUtils {
  /**
   * 用于表单动态验证
   * @param {FormGroup} formGroup
   */
  static validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      }else if (control instanceof  FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  /**
   * can use this when formgroup not nested formgroup
   * @param {FormGroup} form
   * @param {string} field
   * @returns {boolean}
   */
  static isFieldValid(form: FormGroup, field: string): boolean {
    return !form.get(field).valid && form.get(field).touched;
  }

  /**
   * can use this when formgroup nested formgroup
   * @param {AbstractControl} form
   * @param {string} field
   * @returns {boolean}
   */
  static isFieldGroupValid(form: AbstractControl, field: string): boolean {
    return !form.get(field).valid && form.get(field).touched;
  }


}

// 时间工具类
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

// 域名工具类
export class HostUtils {

  /**
   * 获取端口
   */
  static getLocalhost = (): string => {
    return window.location.host;
  };

  /**
   * 获取域名
   */
  static getLocalHostUrl = (): string => {
    return window.location.hostname;
  }
}

// 视口工具类
export class ViewportUtils {
  /**
   * 功能：全屏展示
   * @param el
   */
  static launchFullScreen = (el): void => {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen(el.ALLOW_KEYBOARD_INPUT);
    }
  };

  /**
   * 功能： 退出全屏
   * @param el
   */
  static exitFullScreen = (el): void => {
    if (el.exitFullscreen) {
      el.exitFullscreen();
    } else if (el.msExitFullscreen) {
      el.msExitFullscreen();
    } else if (el.mozCancelFullScreen) {
      el.mozCancelFullScreen();
    } else if (el.webkitExitFullscreen) {
      el.webkitExitFullscreen();
    }
  }
}

// 数字处理工具类
export class NumberUtils  {

  /**
   * 功能： 格式化数字 每三位一个逗号 （100，100，100）
   * @param num
   * @returns {number}
   */
  static splitThousandsByDot = (num): string => {
    num = (num || 0).toString();
    let result = '';
    while (num.length > 3) {
      result = ',' + num.slice(-3) + result;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    return result;
  }
}

// 字符串工具类
export class StringUtils {

}

