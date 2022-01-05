// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvlx5vWyeXDgi8pDrCfSM-FPsEDl4a55E",
  authDomain: "twitter-50495.firebaseapp.com",
  projectId: "twitter-50495",
  storageBucket: "twitter-50495.appspot.com",
  messagingSenderId: "312011370995",
  appId: "1:312011370995:web:2ce05e267c2c6bede0a286",
  measurementId: "G-82PZPKCMKP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;