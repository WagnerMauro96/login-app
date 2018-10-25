// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseconfig: {
    apiKey: 'AIzaSyC2kg5bEAuDmlvep1C_qp2xp3j2Zi-XYzE',
    authDomain: 'auth-ap.firebaseapp.com',
    databaseURL: 'https://auth-ap.firebaseio.com',
    projectId: 'auth-ap',
    storageBucket: 'auth-ap.appspot.com',
    messagingSenderId: '349967012268'
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
