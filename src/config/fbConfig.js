import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics';


var firebaseConfig = {

    apiKey: "AIzaSyD5i6fzH-sSiN6K6ndEbMqWNJmHOIwRefw",
    authDomain: "dynamoshop-c6279.firebaseapp.com",
    databaseURL: "https://dynamoshop-c6279.firebaseio.com",
    projectId: "dynamoshop-c6279",
    storageBucket: "dynamoshop-c6279.appspot.com",
    messagingSenderId: "192327612038",
    appId: "1:192327612038:web:10979b37a732c945534307",
    measurementId: "G-SX2W9LG2NE"
    
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()
firebase.analytics();

export default firebase