import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
  authDomain: "challenge-4b2b2.firebaseapp.com",
  databaseURL: "https://challenge-4b2b2.firebaseio.com",
  projectId: "challenge-4b2b2",
  storageBucket: "challenge-4b2b2.appspot.com",
  messagingSenderId: "962418448875",
  appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
};




const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db =firebaseApp.firestore();



export const auth = firebase.auth() 
