import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAiDvXp_LYr50Be5Gus-nBvmN4LPoSyL28',
  authDomain: 'crown-db-db982.firebaseapp.com',
  databaseURL: 'https://crown-db-db982.firebaseio.com',
  projectId: 'crown-db-db982',
  storageBucket: 'crown-db-db982.appspot.com',
  messagingSenderId: '137056154930',
  appId: '1:137056154930:web:b0d96d3f0b98b7ec82d32b',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
