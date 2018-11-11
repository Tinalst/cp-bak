/**
 * 功能： 为元素新增class样式
 * @param el
 * @param className
 */
export function addClass(el, className) {
    if(!hasClass(el, className)) {
        let newClass = el.className.split(' ');
        newClass.push(className);
        el.className = newClass.join(' ');
    }
}

/**
 * 检测元素是否已经有某个样式类名
 * @param el
 * @param className
 * @returns {boolean}
 */
export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
}