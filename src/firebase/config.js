import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBvdf5G18XliY3Q7zRMFM2Ujzk-mbP1cOI",
    authDomain: "tackle-it-7.firebaseapp.com",
    projectId: "tackle-it-7",
    storageBucket: "tackle-it-7.appspot.com",
    messagingSenderId: "463778182163",
    appId: "1:463778182163:web:1917ce5fcbff617232fbe6",
    measurementId: "G-TQMMP860YW"
  };

  // connects firebase backend to react web app
  firebase.initializeApp(firebaseConfig)

  // initialize services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp, projectStorage}