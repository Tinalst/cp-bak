export class ToolsUtil {
        static String2Json = (str: string): object => {
                return JSON.parse(str);
        }

        static getLocalhost = (): string => {
                return window.location.host;
        }

        static getLocalHostUrl = (): string => {
                return window.location.hostname;
        }
}
