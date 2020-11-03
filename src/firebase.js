import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZi8YppbVtbV_rqBEBLN66FT29xCDrzcw",
  authDomain: "clone-7d778.firebaseapp.com",
  databaseURL: "https://clone-7d778.firebaseio.com",
  projectId: "clone-7d778",
  storageBucket: "clone-7d778.appspot.com",
  messagingSenderId: "291758025371",
  appId: "1:291758025371:web:eced1fd3e763e11bbcf43e",
  measurementId: "G-B3T7X9F60W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
