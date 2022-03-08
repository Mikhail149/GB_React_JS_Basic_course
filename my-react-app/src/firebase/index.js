import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDF5yRiuN_qod-woArXQWM0qaohG1SOglg",
  authDomain: "gbchat-1500f.firebaseapp.com",
  databaseURL: "https://gbchat-1500f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gbchat-1500f",
  storageBucket: "gbchat-1500f.appspot.com",
  messagingSenderId: "36192691104",
  appId: "1:36192691104:web:a292d266309f8cb9b1fac5"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();