import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVyk_VYTITpSxWZwo7Dhn8EI6EqMFrnmI",
  authDomain: "challenge-a297f.firebaseapp.com",
  projectId: "challenge-a297f",
  storageBucket: "challenge-a297f.appspot.com",
  messagingSenderId: "640534321888",
  appId: "1:640534321888:web:dd4efcf78141a7dd544e85",
  measurementId: "G-K3BDFG3BLG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };