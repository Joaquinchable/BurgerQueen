import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "burger-queen-5adf0.firebaseapp.com",
  databaseURL: "https://burger-queen-5adf0.firebaseio.com",
  projectId: "burger-queen-5adf0",
  storageBucket: "burger-queen-5adf0.appspot.com",
  messagingSenderId: "847585762074",
  appId: "1:847585762074:web:dbe89705207def05b6eaa3"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
