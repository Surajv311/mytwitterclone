import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe7vfsvZGFumONQI_Jk1ClmbjvGBNzroY",
  authDomain: "mytwitter-clone.firebaseapp.com",
  databaseURL: "https://mytwitter-clone.firebaseio.com",
  projectId: "mytwitter-clone",
  storageBucket: "mytwitter-clone.appspot.com",
  messagingSenderId: "865723306905",
  appId: "1:865723306905:web:e0b3e3d9cf13daa7abf908",
  measurementId: "G-1XH19LTXWS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// connecting firestore with our app
const db = firebaseApp.firestore();

export default db;
