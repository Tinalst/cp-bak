export class TimeUtil {

    /**
     * 时间补零修正
     * @param t
     * @param type
     */
    static checkTime = (t, type?): string => {
        if (type === 3 ) {
            return TimeUtil.checkThreeLength(t);
        } else {
            if (t < 10) {
                return `0${t}`;
            }else {
                return `${t}`;
            }
        }
    }

    static checkThreeLength = (t) => {
        if (t < 10) {
            return `00${t}`;
        } else if ( t < 100) {
            return `0${t}`;
        } else {
            return `${t}`;
        }
    }

}
