
import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
import 'firebase/storage'




var firebaseConfig = {
    apiKey: "AIzaSyDDchI-KGAKEvHLLg09Z6NZDS79h8zGJOw",
    authDomain: "graduation-a0b66.firebaseapp.com",
    databaseURL: "https://graduation-a0b66.firebaseio.com",
    projectId: "graduation-a0b66",
    storageBucket: "graduation-a0b66.appspot.com",
    messagingSenderId: "13991890247",
    appId: "1:13991890247:web:f769e2f3ffa914ed91d062"
  };
  // Initialize Firebase
  var db = firebase.initializeApp(firebaseConfig);
 var storeage = firebase.storage()
 

  

  export default db
