// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appConfig: {
    remoteBaseUrl: 'http://192.168.21.181:8090/fxKyc',  // TTF
    // remoteBaseUrl: 'http://192.168.21.62:8090/fxKyc',      // testonline
    // remoteBaseUrl: 'http://192.168.21.155:8090/fxKyc',  // lhz
    gRecaptcha: '6Lc4ukEUAAAAAHW0WSkD1wphitG6hQvZ5vtpyjl8'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
