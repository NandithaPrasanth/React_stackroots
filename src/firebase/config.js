import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANAln5o_3H4j0qOgiDzHasl0_WNNuk034",
    authDomain: "rootproject-80c03.firebaseapp.com",
    projectId: "rootproject-80c03",
    storageBucket: "rootproject-80c03.appspot.com",
    messagingSenderId: "659317070924",
    appId: "1:659317070924:web:1396895500b67e0f1fe8e9",
    measurementId: "G-SYYWM20QPW"
  };
  
  // Initialize Firebase
  export  default firebase.initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

