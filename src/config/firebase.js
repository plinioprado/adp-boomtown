import * as firebase from 'firebase';
import 'firebase/auth';

// initialize firebase
const config = {
  apiKey: "AIzaSyDh9oYFLiFAgN2NnP2xALy_ZCgIxsGQ43M",
  authDomain: "boomtown-6e182.firebaseapp.com",
  databaseURL: "https://boomtown-6e182.firebaseio.com",
  projectId: "boomtown-6e182",
  storageBucket: "boomtown-6e182.appspot.com",
  messagingSenderId: "847318734497"
};

const FirebaseApp = firebase.initializeApp(config);
const FirebaseAuth = FirebaseApp.auth();
const FirebaseDb = firebase.database();
// const FirebaseStorage = Firebase.storage(FirebaseApp);

export default {
  FirebaseApp,
  FirebaseAuth,
  FirebaseDb
  // FirebaseStorage,
};
