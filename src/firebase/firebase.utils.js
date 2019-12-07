import firebase from 'firebase/app';
import 'firebase/firestore'; //for the database
import 'firebase/auth'; //for the auth

const config = {
    apiKey: "AIzaSyAnSTefBdGXT1morD30nCpWAoZNNm-Fb5U",
    authDomain: "crown-db-9b186.firebaseapp.com",
    databaseURL: "https://crown-db-9b186.firebaseio.com",
    projectId: "crown-db-9b186",
    storageBucket: "crown-db-9b186.appspot.com",
    messagingSenderId: "151491606541",
    appId: "1:151491606541:web:08694c8b930a7a066a7d44",
    measurementId: "G-ZWW06DZFKF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;