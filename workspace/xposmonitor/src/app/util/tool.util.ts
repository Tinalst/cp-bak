export class ToolUtil {
    /**
     * 功能：全屏展示
     * @param el
     */
    static launchFullScreen = (el):void => {
        if(el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen(el.ALLOW_KEYBOARD_INPUT);
        }
    }

    /**
     * 功能： 退出全屏
     * @param el
     */
    static exitFullScreen = (el):void => {
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
