import * as firebase from 'firebase';
import 'firebase/auth';

// initialize firebase
const config = {
  apiKey: 'AIzaSyC8_rVNFlNtauGMaeZYXw77oe9NSbHc3ZM',
  authDomain: 'boomtow-87b60.firebaseapp.com',
  databaseURL: 'https://boomtow-87b60.firebaseio.com',
  projectId: 'boomtow-87b60',
  storageBucket: 'boomtow-87b60.appspot.com',
  messagingSenderId: '881455278007'
};

// const config = {
//   apiKey: 'AIzaSyDh9oYFLiFAgN2NnP2xALy_ZCgIxsGQ43M',
//   authDomain: 'boomtown-6e182.firebaseapp.com',
//   databaseURL: 'https://boomtown-6e182.firebaseio.com',
//   projectId: 'boomtown-6e182',
//   storageBucket: 'boomtown-6e182.appspot.com',
//   messagingSenderId: '847318734497'
// };

const FirebaseApp = firebase.initializeApp(config);
const FirebaseAuth = FirebaseApp.auth();
const FirebaseDb = firebase.database();
const FirebaseStorage = firebase.storage(FirebaseApp);

export {
  config,
  FirebaseApp,
  FirebaseAuth,
  FirebaseDb,
  FirebaseStorage
};
