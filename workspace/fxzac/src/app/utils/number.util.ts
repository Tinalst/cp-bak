export class NumberUtil {
  /**
   * 功能： 格式化数字。没三位一个逗号
   * @param num
   * @returns {number}
   */
  static toThousands = (num): string => {
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
