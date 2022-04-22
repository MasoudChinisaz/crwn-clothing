import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
    apiKey: "AIzaSyDUNGOqjRZVx3pxCjuSjZU9ohcVauvOFDY",
    authDomain: "crwn-db-f0bec.firebaseapp.com",
    projectId: "crwn-db-f0bec",
    storageBucket: "crwn-db-f0bec.appspot.com",
    messagingSenderId: "1003769480559",
    appId: "1:1003769480559:web:dc32a1d3fc2e34350d949a",
    measurementId: "G-DL50TF0QH5"
  }

  firebase.initializeApp(config)


  export const auth = firebase.default.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;
  
