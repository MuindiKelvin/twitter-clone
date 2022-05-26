import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO29hnfiCt02C00T0tUdsc1cFKKOHfn0g",
  authDomain: "twitter-clone-2c3a7.firebaseapp.com",
  projectId: "twitter-clone-2c3a7",
  storageBucket: "twitter-clone-2c3a7.appspot.com",
  messagingSenderId: "250050761744",
  appId: "1:250050761744:web:84b17cf2f9ff9db2c52695",
  measurementId: "G-0HYD7YQF4H"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;