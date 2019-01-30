import {AbstractControl} from '@angular/forms';

/**
 * 非法邮箱校验
 * @param control
 * @return  非法邮箱： {invalidEmail: true}  合法邮箱 null
 */
export const isIllegalEmail = (control: AbstractControl): {[key: string]: boolean} => {
  // 全部转成小写
  const email = control.value.trim().toLowerCase();
  // 是否是邮箱
  const regMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9_-]+)$/gm;
  // 是否是非法邮箱
  const specificReg =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@(163|yeah|sina|126|qq|sohu|tom|sogou|139|189|21cn|foxmail)+(\.[a-zA-Z0-9_-]+)$/gm;
  // 是否是
  const yahocn = /\w+@yahoo.cn$/g;
  const notcn = /^.*cn$/gm;
  // 表单字段不为空
  if(email) {
    // 是否是邮箱格式
    if (regMail.test(email)) {
      // 是否是非法邮箱
      if (specificReg.test(email)) {
        // 校验成功
        return {invalidEmail: true}
      } else {
        // 是否是雅虎.cn
        if(yahocn.test(email)) {
          // 校验成功
          return {invalidEmail: true}
        } else {
          // 是否是中国邮箱
          if(notcn.test(email)) {
            // 校验成功
            return {invalidEmail: true}
          }else  {
            return null;
          }
        }
      }
    }else {
      // 校验失败
      return {invalidEmail: true}
    }
  }
};

/**
 * 邮箱格式校验
 * @param control
 * @return 不符合邮箱格式 {email: true}  符合邮箱格式 null
 */
export const isEmail = (control: AbstractControl): {[key: string]: boolean} => {
  // 全部转成小写
  const email = control.value.trim().toLowerCase();
  // 是否是邮箱
  const regMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9_-]+)$/gm;
  if(email) {
    // 不符合邮箱格式
    if (!regMail.test(email)) {
      return {email: true}
    } else {
      return null;
    }
  }
}
